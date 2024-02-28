import json

from src.conversation import Conversation

# from chat_backend.conversation import Conversation

#OUTDATED TESTS

def test_always_passes():
    assert True

def test_start_chat():
    '''
    GIVEN an empty json with no data
    WHEN starting a new chat
    THEN the first message/prompt is returned
    '''
    
    input_list = []
    resulting_json = Conversation.process_chat(input_list, True)
    expected_json = json.dumps({'data': [{'id': 0,
                               'message': 'Welcome to GenAI Dashboard Builder Chatbox! I’m going to ask you a series of questions to create a personalised dashboard based on your business needs. Would you like to proceed to generate a customised AI dashboard app?',
                               'user': False}]})
    assert resulting_json == expected_json

def test_continue_conv_0():
    '''
    GIVEN an json with some data (correct format)
    WHEN starting a continuing a chat
    THEN the correct next response is given in a correctly formatted json
    '''
    input_list = [{"id": 0,
                   "message": "Welcome to GenAI Dashboard Builder Chatbox! I’m going to ask you a series of questions to create a personalised dashboard based on your business needs. Would you like to proceed to generate a customised AI dashboard app?",
                   "user": False},
                  {"id": 1,
                   "message": "yes",
                   "user": True}]
    resulting_json = Conversation.process_chat(input_list, True)
    expected_json = json.dumps({'data': [{'id': 0,
                                        'message': 'Welcome to GenAI Dashboard Builder Chatbox! I’m going to ask you a series of questions to create a personalised dashboard based on your business needs. Would you like to proceed to generate a customised AI dashboard app?',
                                        'user': False},
                                        {'id': 1,
                                         'message': "yes",
                                         'user': True},
                                        {'id': 2,
                                         'message': "We would like to connect to your data sources such as your bank accounts and ERP system.",
                                         'user': False},
                                        {'id': 3,
                                        'message': "Would you like us to integrate with all the products and banking facilities that you have with us?",
                                        'user': False}]})
    assert resulting_json == expected_json

def test_continue_conv_1():
    '''
    GIVEN an json with some data (correct format)
    WHEN starting a continuing a chat
    THEN the correct next response is given in a correctly formatted json
    '''
    input_list = [{'id': 0,
                   'message': 'Welcome to GenAI Dashboard Builder Chatbox! I’m going to ask you a series of questions to create a personalised dashboard based on your business needs. Would you like to proceed to generate a customised AI dashboard app?',
                   'user': False},
                  {'id': 1,
                   'message': "no",
                   'user': True}]
    resulting_json = Conversation.process_chat(input_list, True)
    expected_json = json.dumps({'data': [{'id': 0,
                                        'message': 'Welcome to GenAI Dashboard Builder Chatbox! I’m going to ask you a series of questions to create a personalised dashboard based on your business needs. Would you like to proceed to generate a customised AI dashboard app?',
                                        'user': False},
                                        {'id': 1,
                                         'message': "no",
                                         'user': True},
                                        {'id': 2,
                                         'message': "Ok, goodbye!",
                                         'user': False,
                                         'end': True}]})
    assert resulting_json == expected_json

def test_continue_conv_2():
    '''
    GIVEN an json with some data (correct format)
    WHEN starting a continuing a chat
    THEN the correct next response is given in a correctly formatted json
    '''
    input_list = [{'id': 0,
                   'message': 'Welcome to GenAI Dashboard Builder Chatbox! I’m going to ask you a series of questions to create a personalised dashboard based on your business needs. Would you like to proceed to generate a customised AI dashboard app?',
                   'user': False},
                  {'id': 1,
                   'message': "yes",
                   'user': True},
                  {'id': 2,
                   'message': "We would like to connect to your data sources such as your bank accounts and ERP system.",
                   'user': False},
                  {'id': 3,
                   'message': "Would you like us to integrate with all the products and banking facilities that you have with us?",
                   'user': False},
                  {'id': 4,
                   'message': "yes",
                   'user': True}]
    resulting_json = Conversation.process_chat(input_list, True)
    expected_json = json.dumps({'data': [{'id': 0,
                                        'message': 'Welcome to GenAI Dashboard Builder Chatbox! I’m going to ask you a series of questions to create a personalised dashboard based on your business needs. Would you like to proceed to generate a customised AI dashboard app?',
                                        'user': False},
                                        {'id': 1,
                                         'message': "yes",
                                         'user': True},
                                        {'id': 2,
                                         'message': "We would like to connect to your data sources such as your bank accounts and ERP system.",
                                         'user': False},
                                        {'id': 3,
                                         'message': "Would you like us to integrate with all the products and banking facilities that you have with us?",
                                         'user': False},
                                        {'id': 4,
                                         'message': "yes",
                                         'user': True},
                                        {'id': 5,
                                         'message': "Do you have any other banking relationships you would like us to integrate with?",
                                         'user': False}]})
    assert resulting_json == expected_json

def test_continue_conv_3():
    '''
    GIVEN an json with some data (correct format)
    WHEN starting a continuing a chat
    THEN the correct next response is given in a correctly formatted json
    '''
    input_list = [{'id': 0,
                   'message': 'Welcome to GenAI Dashboard Builder Chatbox! I’m going to ask you a series of questions to create a personalised dashboard based on your business needs. Would you like to proceed to generate a customised AI dashboard app?',
                   'user': False},
                  {'id': 1,
                   'message': "yes",
                   'user': True},
                  {'id': 2,
                   'message': "We would like to connect to your data sources such as your bank accounts and ERP system.",
                   'user': False},
                  {'id': 3,
                   'message': "Would you like us to integrate with all the products and banking facilities that you have with us?",
                   'user': False},
                  {'id': 4,
                   'message': "no",
                   'user': True}]
    resulting_json = Conversation.process_chat(input_list, True)
    expected_json = json.dumps({'data': [{'id': 0,
                                        'message': 'Welcome to GenAI Dashboard Builder Chatbox! I’m going to ask you a series of questions to create a personalised dashboard based on your business needs. Would you like to proceed to generate a customised AI dashboard app?',
                                        'user': False},
                                        {'id': 1,
                                         'message': "yes",
                                         'user': True},
                                        {'id': 2,
                                         'message': "We would like to connect to your data sources such as your bank accounts and ERP system.",
                                         'user': False},
                                        {'id': 3,
                                         'message': "Would you like us to integrate with all the products and banking facilities that you have with us?",
                                         'user': False},
                                        {'id': 4,
                                         'message': "no",
                                         'user': True},
                                        {'id': 5,
                                         'message': "Please select which products you would like us to connect with.",
                                         'user': False},
                                        {'id': 6,
                                         'message': "Do you have any other banking relationships you would like us to integrate with?",
                                         'user': False}]})
    assert resulting_json == expected_json

def test_incorrect_json_empty():
    '''
    GIVEN an json that is not correct format
    WHEN starting/continuing conversation
    THEN an error message is returned
    '''
    input_list = [{}]
    actual_result = Conversation.process_chat(input_list, True)
    expected_result = json.dumps({'error': "ERROR: either not a json or incorrect format json"})
    assert actual_result == expected_result

def test_incorrect_json_missing_id():
    '''
    GIVEN an json that is not correct format
    WHEN starting/continuing conversation
    THEN an error message is returned
    '''
    input_list = [{
'message': 'Welcome to GenAI Dashboard Builder Chatbox! I’m going to ask you a series of questions to create a personalised dashboard based on your business needs. Would you like to proceed to generate a customised AI dashboard app?',
                   'user': False}]
    actual_result = Conversation.process_chat(input_list, True)
    expected_result = json.dumps({'error': "ERROR: either not a json or incorrect format json"})
    assert actual_result == expected_result