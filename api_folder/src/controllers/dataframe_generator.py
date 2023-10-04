import openai
import json
import pandas as pd
from flask import jsonify
import numpy as np
from openai.embeddings_utils import get_embedding, cosine_similarity
from sklearn.cluster import KMeans
import os
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores.faiss import FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain import OpenAI, VectorDBQA
from src.controllers.longtext import state_of_the_union
from src.controllers.sample import sample_json
import requests as requests


text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
texts = text_splitter.split_text(state_of_the_union)

embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_texts(texts, embeddings)

class OpenAIController:
    def __init__(self):
        openai.api_key = "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"


    def create_embeddings(self):
        response=requests.get("https://lets.talk.goredc.govt.nz/api/v2/projects/59654/forums/174457/comments?per_page=10", headers={"X-API-Token":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTYzOTcwODUsImp0aSI6IjUzZjU2MjQ1YzIxODk5NmI3OTAwOGVmODcxMWZmMjZhIiwiZXhwIjoxNjk2NTY5ODg1LCJpc3MiOiJCYW5nIFRoZSBUYWJsZSBQdnQgTHRkIiwiZGF0YSI6eyJ1c2VyX2lkIjoxNDEwNjE1NTMxLCJ1c2VyX3R5cGUiOiJBbm9ueW1vdXNVc2VyIiwic2l0ZV9pZCI6bnVsbCwicHJvamVjdF9pZCI6bnVsbH19._BNjQy7MWiXY0hsKc4wE9RrhQ6YorAumC17e0xMhJcY"})
        data = response.json()
        df = pd.read_csv('words.csv')
        contributions = data['data']
        comments = []
        for contribution in contributions:
            comments.append({'comment': contribution['attributes']['comment'], 'author': contribution['attributes']['author']})
        pd.DataFrame(comments).to_csv('words.csv')
        df = pd.read_csv('words.csv')
        df['embedding'] = df['comment'].apply(lambda x: get_embedding(x, engine='text-embedding-ada-002'))
        df.to_csv('word_embeddings.csv')
        df = pd.read_csv('word_embeddings.csv')
        selected_columns = ["author", "comment"]
        selected_df = df[selected_columns]
        json_data = selected_df.to_json(orient='records')
        return json_data
    
    def perform_clustering(self):
        df = pd.read_csv('word_embeddings.csv')
        corpus = df['comment'].to_numpy().tolist()
        print(corpus)
        response = openai.Embedding.create(
            input=corpus,
            model="text-similarity-babbage-001"
        )
        corpus_embeddings = [ d['embedding'] for d in response['data']]
        # Normalize the embeddings to unit length
        corpus_embeddings = corpus_embeddings /  np.linalg.norm(corpus_embeddings, axis=1, keepdims=True)
        clustering_model = KMeans(n_clusters=3)
        clustering_model.fit(corpus_embeddings)
        cluster_assignment = clustering_model.labels_
        clustered_sentences = {}
        for sentence_id, cluster_id in enumerate(cluster_assignment):
            if str(cluster_id) not in clustered_sentences:
                clustered_sentences[str(cluster_id)] = []

            clustered_sentences[str(cluster_id)].append(corpus[sentence_id])
        print("Clustered sentences  --------------------------------")
        print(clustered_sentences)
        
        return {"clustered_sentences": clustered_sentences}, 200
    
    def perform_qanda(self, query):
        df = pd.read_csv('words.csv')
        column_series = df["comment"]
        column_series
        concatenated_string = ' '.join(column_series.astype(str))
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
        texts = text_splitter.split_text(concatenated_string)
        api_key = "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"
        embeddings = OpenAIEmbeddings(openai_api_key = api_key)
        vectorstore = FAISS.from_texts(texts, embeddings)
        print("Printing Vector store")
        print(vectorstore)
        qa = VectorDBQA.from_chain_type(llm=OpenAI(), chain_type="stuff", vectorstore=vectorstore)
        query_result = qa.run(query)
        return query_result
    
    def perform_json(self):
        df = pd.DataFrame(sample_json)

        # Specify the file path where you want to save the CSV file
        csv_file_path = 'words.csv'

        # Save the DataFrame to a CSV file
        df.to_csv(csv_file_path, index=False) 
        return sample_json
    
    def semantic_search(self, search_term):
        # Specify the file path where you want to save the CSV file
        df = pd.read_csv('word_embeddings.csv')
        df['embedding'] = df['embedding'].apply(eval).apply(np.array)
        search_term_vector = get_embedding(search_term, engine="text-embedding-ada-002")
        df["similarities"] = df['embedding'].apply(lambda x: cosine_similarity(x, search_term_vector))
        df.sort_values("similarities", ascending=False, inplace=True)
        json_data = json.loads(df.to_json(orient='records'))
        for obj in json_data:
            del obj["embedding"]
        return json_data