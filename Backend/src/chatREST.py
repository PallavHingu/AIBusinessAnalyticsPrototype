from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

from conversation import Conversation


app = Flask(__name__)
CORS(app)
api = Api(app)

class chat(Resource):
    def post(self):
        chatData = request.get_json(force=True)
        chatData = Conversation.process_chat(chatData)
        return chatData
    
class test(Resource):
    def post(self):
        return "works"
        
api.add_resource(chat, '/api/chat')
api.add_resource(test, '/api/test')
 
#  TEMP CHANGE PORT
if __name__ == '__main__':
    app.run(debug=True,port=8080,host='0.0.0.0')