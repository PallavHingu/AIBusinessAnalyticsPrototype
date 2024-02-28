import json
import jsonschema
from flask import jsonify, request
from jsonschema import validate

class Conversation():

    # There are collections, messages and prompts. 
    # Collections require a user response, collecting data. 
    # Messages do not require a user response
    # Prompts require user response such that convo affected by response

    dataGlobal = {
        "businessName": "",
        "shownComponents": [],
        "shownTopComponents": [],
        "bankInfo": [],
        "banksQueue": [],
        "erpInfo": []
    }

    # dictionary of bank icons, use only lower case for the keys 
    bankIcons = {
        "natwest": "https://static.cdnlogo.com/logos/n/89/natwest.svg",
        "barclays": "someBarclaysImage"
    }

    def setBusinessName(user_response):
        Conversation.dataGlobal['businessName'] = user_response

    def setBanks(user_response):
        bankList = [x.strip() for x in user_response.split(",")]
        for bankName in bankList:
            Conversation.dataGlobal['bankInfo'].append({"bankName": bankName,
                                                        "accountNo": "",
                                                        "sortCode": "",
                                                        "icon": Conversation.bankIcons[bankName.lower()],
                                                        "connected": False})

        # for index in range(len(bankList)):
        #     Conversation.dataGlobal['bankInfo'].append({"bankName": bankList[index],
        #                                                 "accountNo": "",
        #                                                 "sortCode": "",
        #                                                 "icon": "https://static.cdnlogo.com/logos/n/89/natwest.svg",
        #                                                 "connected": False})
        Conversation.dataGlobal["banksQueue"] = bankList

        if not "BankIntegrations" in Conversation.dataGlobal["shownTopComponents"]:
            Conversation.dataGlobal["shownTopComponents"].append("BankIntegrations")

    def setBankDetails(user_response):
        bankDetails = [x.strip() for x in user_response.split(",")]
        bank = Conversation.dataGlobal['banksQueue'].pop(0)
        for bankjson in Conversation.dataGlobal["bankInfo"]:
            if bankjson["bankName"] == bank:
                bankjson["accountNo"] = bankDetails[0]
                bankjson["sortCode"] = bankDetails[1]
        # for index in range(len(Conversation.dataGlobal['bankInfo'])):
        #     if Conversation.dataGlobal['bankInfo'][index]['accountNo'] == "":
        #         Conversation.dataGlobal['bankInfo'][index]['accountNo'] = bankDetails[0]
        #         Conversation.dataGlobal['bankInfo'][index]['sortCode'] = bankDetails[1]

    def setBankConnection(user_response):
        for bankjson in Conversation.dataGlobal["bankInfo"]:
            if not bankjson["connected"]:
                bankjson["connected"] = True

    def setERPsystem(user_response):
        Conversation.dataGlobal['erpInfo'].append({"erpSystem": user_response,
                                                   "erpKey": "",
                                                   "icon": ""
        })

    def setERPkey(user_response):
        Conversation.dataGlobal['erpInfo'][0]['erpKey'] = user_response
            
    def checkBankQueue(user_response):
        Conversation.dataGlobal['banksQueue']
    
    chat_flow = [
        ["Good day! Welcome to your personalized AI assistant CFO; this feature allows you to leverage the power of AI to measure, grow and report on the overall health of your business. This AI assistant securely & confidentially links seamlessly with all of your corporate banking accounts & your ERP system in order to provide invaluable insights. This includes a real time live view of your total working capital so you can avoid any nasty surprises. I will begin by initialising these integrations and using this data to build out a live dashboard with key metrics that help you understand and communicate with more confidence about the current state of your fir<br>Before we proceed, may I kindly ask for your business name?", "setBusinessName", "collection"],
        ["Next, I would like to confirm if its acceptable to continue and request some information regarding all the business banks associated with your account. This data will only be used for the purposes of building you a bespoke business dashboard through the power of generative AI.<br>Please provide the name of all banks your business has current relationships with.<br>Rest assured, your data will be handled securely and kept confidential.", "setBanks", "collection"],
        ["For the [BankName] account please provide the ‘Account Number’ & ‘Sort Code’. We will then begin integrating this account into your live dashboard.<br>Please respond in the format: “123456789, 12-34-56”", "setBankDetails", "collection"],
        ["Please respond when you have approved the push notification sent to the mobile banking apps associated with your [BankName] account to authorise.", "setBankConnection" , "collection"],
        ["Thanks! We have received authorisation from [BankName]. We have securely and temporarily stored your data.", "checkBankQueue", "collection"],
        ["Which system do you use for ERP reporting?", "setERPsystem", "collection"],
        ["To integrate data from your ERP into your bespoke AI generated dashboard please provide your ‘Web Service Access Key’; this can be found in your ERP account settings. If you need assistance to find this key please contact your ERP provider.", "setERPkey", "collection"],
        ["Perfect, thanks for providing your unique ERP Web Service Access Key, we can now incorporate data stored in your ERP into your bespoke dashboard.", "message"],
        ["Please quickly review the generated elements, metrics & insights shown on the left. If you’re happy to proceed please reply ‘Yes’ to continue, alternatively reply ‘No’.", "prompt"],
        ["Would you like to implement additional metrics into your dashboard?", "prompt"],
        ["Would you like to use our intelligent forecasting capabilities to generate working capital insights?", "prompt"],
        ["Your dashboard is being generated!", "message"]]

    @staticmethod
    def process_chat(chatData):
        chat_flow = Conversation.chat_flow
        conv = chatData['conversation']
        Conversation.dataGlobal = chatData['data']
        print("a")
        # If start of chat, get first message
        if conv == []:
            conv.append(
                {'user': False,
                'message': chat_flow[0][0]})
        else:
            if not Conversation.validate(conv):
                return jsonify({'error': "ERROR: either not a json or incorrect format json"})
            if len(conv) == 1:
                return jsonify({'error': "ERROR: chat history has 1 item (user has not responded (?))"})
            
            #Retrieve last and penultimate messages (last bot message and user response to it)
            last_bot_message_text = conv[-2]['message']
            user_response = conv[-1]['message']
            print("b")
            #Replaces bank name with "[BankName]"" so can find in chat flow
            for bank in Conversation.dataGlobal['bankInfo']:
                print("c")
                print(bank['bankName'])
                print("last_bot_message_text", last_bot_message_text)
                last_bot_message_text = last_bot_message_text.replace(bank['bankName'], "[BankName]")



            print("last_bot_message_text", last_bot_message_text)


            #Find index of bot message in chat flow
            message_index = Conversation.find_message_index(last_bot_message_text)
            
            #Get info from chat_flow for message, if collection prompt then update data
            last_bot_message = chat_flow[message_index]

            if last_bot_message[-1] == "collection":
                updateFunction = getattr(Conversation, last_bot_message[1])
                updateFunction(user_response)
            
            #Get next chat using chat_flow (currently user response has no effect)
            conv = conv + Conversation.get_next_chat(user_response, message_index)

        # Return the updated response
        return jsonify({"conversation": conv, "data": Conversation.dataGlobal})
    
    def get_next_chat(user_response, message_index): # Perform some logic to determine chats to add
        chat_flow = Conversation.chat_flow
        new_chat = [] #list of message dicts to be added
        next_msg_index = message_index + 1
        
        print(Conversation.dataGlobal['banksQueue'])
        if chat_flow[next_msg_index][1] == "checkBankQueue":
            if len(Conversation.dataGlobal['banksQueue']) != 0:
                print("more left in bank queue found")
                print(Conversation.dataGlobal['banksQueue'])
                next_msg_index = 2
            else:
                next_msg_index = 5

        next_msg = chat_flow[next_msg_index]
        
        bankName = ""
        if len(Conversation.dataGlobal['banksQueue']) != 0:
            bankName = Conversation.dataGlobal['banksQueue'][0]
        
        print("bankName", bankName)
        
        if bankName == "" and next_msg_index == 2:
            next_msg_index = 5
            next_msg = chat_flow[next_msg_index]

        #If last message, end chat
        if next_msg == chat_flow[-1]:
            new_chat.append({
                'user': False,
                'message': next_msg[0],
                'end': True})
            return new_chat
        

        while (next_msg[-1] != "prompt") and (next_msg[-1] != "collection"):
            new_chat.append({
                'user': False,
                'message': next_msg[0].replace("[BankName]", bankName)})
            next_msg_index += 1
            next_msg = chat_flow[next_msg_index]

        new_chat.append({
            'user': False,
            'message': next_msg[0].replace("[BankName]", bankName)})
        
        return new_chat #[{"message": "", "user": false}, {"message": "", "user": false}]
    

    def find_message_index(message):
        chat_flow = Conversation.chat_flow
        for index in range (0, len(chat_flow)):
            if message == chat_flow[index][0]:
                return index
        return 0
    
    def validate(chat_data):
        def validateJson(dictData):
            data_schema = {
                "type": "object",
                "properties": {
                    "user": {"type": "boolean"},
                    "message": {"type": "string"}
                },
                "required": ["user", "message"],
                "additionalProperties": False}
            try:
                validate(instance=dictData, schema=data_schema)
            except jsonschema.exceptions.ValidationError as err:
                return False
            return True
        for item in chat_data:
            if not validateJson(item):
                return False
        return True
    
    # def chatGPT(message):
    #     jsonMessage = {"message": message}
    #     response = request.post(url="url", data=message)
    #     return response['response']