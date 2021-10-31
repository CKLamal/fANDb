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
import mariadb
import sys

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

class User:
  Username = "admin"
  branch =  0

tempUser = User()
request_status = {
  'ORS202109230038' : 'Waiting for Approval',
  'SVM202109160006' : 'Waiting for Approval',
  'PVM202109270010' : 'In-Progress',
  'PVM202109270008' : 'Rejected'
}
vm_status = {
  'cpastdb' : 'stopped',
  'dstlew02' : 'running',
  'qct1tad2' : 'running'
}

try:
    conn = mariadb.connect(
        # user="mssspspu10",
        # password="P@ssw0rd",
        # host="172.25.101.113",
        # port=19307,
        # database="tmssspsp1"
        user="mssspspp11",
        password="P@ssw0rd",
        host="172.21.103.13",
        port=19307,
        database="pmssspsp1",
        ssl=True
    )
except mariadb.Error as e:
  print(f"Error connecting to MariaDB Platform: {e}")
  sys.exit(1)
cur = conn.cursor()

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

def Greeting(username):
  return ("Greeting "+username+ ", I am a chatbot of GCIS SSP. How may I help you?")

def get_request_status(sentence):
  for key in request_status:
    if key in sentence:
      return ("The status of request number "+ key+ " is "+ request_status[key] + '.')
  return "I don't know"

def get_vm_status(sentence):
  for key in vm_status:
    if key in sentence:
      return ("The status of vm "+ key+ " is "+ vm_status[key] + '.')
  return "I don't know"

@app.route('/api/v1/general', methods=['POST'])
def general():
  if tempUser.branch == 0:
    
    recieve = request.get_json()
    print(recieve)
    sentence = recieve["sentence"]
    return_sentence = Greeting(tempUser.Username)
    tempUser.branch += 1
    return json.dumps({
                        "responseId": time.time(),
                        "queryResult":{
                          "queryText":sentence,
                          "webhookPayload":"",
                          "parameters":{
                            "language":"",
                            "language-programming":""
                          },
                          "allRequiredParamsPresent": True,
                          "fulfillmentText":return_sentence,
                          "fulfillmentMessages":[
                            {
                              "text":{
                                "text":[return_sentence]
                              }
                            }
                          ]
                        }
                      })

  elif tempUser.branch == 1:
    recieve = request.get_json()
    print(recieve)
    sentence = recieve["sentence"]
    if re.search('iaas', sentence, re.IGNORECASE):
      return_sentence = "Infrastructure as a service (IaaS) is a type of cloud computing service that offers essential compute, storage, and networking resources on demand, on a pay-as-you-go basis."
    elif re.search('DBaaS', sentence, re.IGNORECASE):
      return_sentence = "Database as a service (DBaaS) is a type of cloud computing service. As a hosted/managed service, users don't have to worry about setting up hardware or installing software. Everything related to managing the database is handled by the service provider."
    elif re.search('CaaS', sentence, re.IGNORECASE):
      return_sentence = "Containers as a service(CaaS) is a cloud service model that allows users to upload, organize, start, stop, scale and otherwise manage containers, applications and clusters."
    elif re.search('request status', sentence, re.IGNORECASE):
      return_sentence = get_request_status(sentence)
    elif re.search('VM status', sentence, re.IGNORECASE):
      return_sentence = get_vm_status(sentence)
    else:
      # return_sentence = "Sorry this question is beyond my knowledge. I would suggest you approach helpdest for more information about this topic"
      return predict()
  
    return json.dumps({
                        "responseId": time.time(),
                        "queryResult":{
                          "queryText":sentence,
                          "webhookPayload":"",
                          "parameters":{
                            "language":"",
                            "language-programming":""
                          },
                          "allRequiredParamsPresent": True,
                          "fulfillmentText":return_sentence,
                          "fulfillmentMessages":[
                            {
                              "text":{
                                "text":[return_sentence]
                              }
                            }
                          ]
                        }
                      })



if __name__ == '__main__':
  app.debug = True
  app.run()

