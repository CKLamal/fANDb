from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem.lancaster import LancasterStemmer
import nltk
import re
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.models import Sequential, load_model
import pickle
import spacy
import json
from flask_cors import CORS
import time

model = load_model(".\Intent_Classification\model.h5", compile = False)
max_length = 28
def load_dataset(filename):
  df = pd.read_csv(filename, encoding = "latin1", names = ["Sentence", "Intent"])
  intent = df["Intent"]
  unique_intent = list(set(intent))
  
  return (intent, unique_intent)
intent, unique_intent = load_dataset(".\Intent_Classification\Dataset.csv")
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, supports_credentials=True)





with open('.\Intent_Classification\word_tokenizer.pickle', 'rb') as handle:
    word_tokenizer = pickle.load(handle)

def padding_doc(encoded_doc, max_length):
  return(pad_sequences(encoded_doc, maxlen = max_length, padding = "post"))

def pos(text):
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(text) # English: 'Where are you?'
    for token in doc:
        print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_,token.shape_, token.is_alpha, token.is_stop)

def predictions(text):
  pos(text)
  clean = re.sub(r'[^ a-z A-Z 0-9]', " ", text)
  test_word = word_tokenize(clean)
  test_word = [w.lower() for w in test_word]
  test_ls = word_tokenizer.texts_to_sequences(test_word)
  print(test_word)
  #Check for unknown words
  if [] in test_ls:
    test_ls = list(filter(None, test_ls))
    
  test_ls = np.array(test_ls).reshape(1, len(test_ls))
 
  x = padding_doc(test_ls, max_length)
  
  pred = model.predict_proba(x)
  
  
  return pred

def get_final_output(pred, classes):
  predictions = pred[0]
 
  classes = np.array(classes)
  ids = np.argsort(-predictions)
  classes = classes[ids]
  predictions = -np.sort(-predictions)
  sentence = ""
 
  for i in range(pred.shape[1]):
    if i == 0:
      sentence = classes[i]
      #sentence = ("%s has confidence = %s" % (classes[i], (predictions[i])))
    print("%s has confidence = %s" % (classes[i], (predictions[i])))
  return sentence

@app.route('/')
def index():
  return 'hello world'

@app.route('/api/v1/prediction', methods=['POST'])
def predict():
  recieve = request.get_json()
  print(recieve)
  sentence = recieve["sentence"]
  result = predictions(sentence)
  final_sentence = get_final_output(result,unique_intent)
  print(final_sentence)
   
  return json.dumps({
                      "responseId": time.time(),
                      "queryResult":{
                        "queryText":sentence,
                        "webhookPayload":"",
                        "parameters": {
                          "language": "",
                          "language-programming": ""
                        },
                        "allRequiredParamsPresent": True,
                        "fulfillmentText":final_sentence,
                        "fulfillmentMessages":[
                          {
                            "text":{
                              "text":[final_sentence]
                            },
                            "quickReplies":{
                              "quickReplies":["yes","no"]
                            }

                          }
                        ], 
                      }
                    })

if __name__ == '__main__':
  app.debug = True
  app.run()

