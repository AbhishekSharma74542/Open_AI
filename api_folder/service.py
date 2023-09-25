from flask import Flask
from src.controllers.dataframe_generator import OpenAIController


openAIController = OpenAIController()

app = Flask(__name__)

@app.route('/')
def hello():
    df = openAIController.print_df()
    return df

@app.route('/create_cluster')
def perform_clustering():
    df = openAIController.perform_clustering()
    return df

@app.route('/q_and_a')
def perform_q_and_a():
    df = openAIController.perform_qanda()
    return df

if __name__ == '__main__':
    app.run(debug=True)