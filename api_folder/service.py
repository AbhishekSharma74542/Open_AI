from flask import Flask, request
from src.controllers.dataframe_generator import OpenAIController


openAIController = OpenAIController()

app = Flask(__name__)

@app.route('/')
def hello():
    df = openAIController.create_embeddings()
    return df

@app.route('/clustering')
def clustering():
    df = openAIController.perform_clustering()
    return df

@app.route('/q_and_a')
def perform_q_and_a():
    query = request.args.get('query')
    df = openAIController.perform_qanda(query)
    return df

@app.route('/sample_json')
def perform_json():
    df = openAIController.perform_json()
    return df

@app.route('/semantic_search')
def semantic_search():
    search_term = request.args.get('search_term')
    df = openAIController.semantic_search(search_term)
    return df

if __name__ == '__main__':
    app.run(debug=True)