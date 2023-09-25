import openai
import pandas as pd
import numpy as np
from openai.embeddings_utils import get_embedding, cosine_similarity
from sklearn.cluster import KMeans
import os
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores.faiss import FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain import OpenAI, VectorDBQA
from src.controllers.longtext import state_of_the_union


text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
texts = text_splitter.split_text(state_of_the_union)

embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_texts(texts, embeddings)

openai_api_key = "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"
os.environ["OPENAI_API_KEY"] = openai_api_key

#@title State of Union Text

#@title Environment Vars
openai_api_key = "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"

class OpenAIController:
    def __init__(self):
        openai.api_key = "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"

    def print_df(self):
        df = pd.read_csv('words.csv')
        print(df)
        embeddings_sample = get_embedding("the fox crossed the road", engine='text-embedding-ada-002')
        print(embeddings_sample)
        df['embedding'] = df['text'].apply(lambda x: get_embedding(x, engine='text-embedding-ada-002'))
        df.to_csv('word_embeddings.csv')
        df = pd.read_csv('word_embeddings.csv')
        df['embedding'] = df['embedding'].apply(eval).apply(np.array)
        print(df)
        search_term = "coffee"
        search_term_vector = get_embedding(search_term, engine="text-embedding-ada-002")
        df["similarities"] = df['embedding'].apply(lambda x: cosine_similarity(x, search_term_vector))
        df.sort_values("similarities", ascending=False).head(20)
        print(df)
        return "printed df"
    
    def perform_clustering(self):
        df = pd.read_csv('word_embeddings.csv')
        corpus = df['text'].to_numpy().tolist()
        corpus2 = ['A man is eating food.',
          'A man is eating a piece of bread.',
          'Horse is eating grass.',
          'A man is eating pasta.',
          'A Woman is eating Biryani.',
          'The girl is carrying a baby.',
          'The baby is carried by the woman',
          'A man is riding a horse.',
          'A man is riding a white horse on an enclosed ground.',
          'A monkey is playing drums.',
          'Someone in a gorilla costume is playing a set of drums.',
          'A cheetah is running behind its prey.',
          'A cheetah chases prey on across a field.',
          'The cheetah is chasing a man who is riding the horse.',
          'man and women with their baby are watching cheetah in zoo'
          ]
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
            if cluster_id not in clustered_sentences:
                clustered_sentences[cluster_id] = []

            clustered_sentences[cluster_id].append(corpus[sentence_id])
        print(corpus)
        print(corpus2)
        print(clustered_sentences)
        
        return "Printed array for clustering"
    
    def perform_qanda(self):
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
        texts = text_splitter.split_text(state_of_the_union)

        embeddings = OpenAIEmbeddings(openai_api_key = openai_api_key)
        vectorstore = FAISS.from_texts(texts, embeddings)
        print("Printing Vector store")
        print(vectorstore)
        qa = VectorDBQA.from_chain_type(llm=OpenAI(), chain_type="stuff", vectorstore=vectorstore)
        query = "What did the president say about Ketanji Brown Jackson"
        query_result = qa.run(query)
        return query_result