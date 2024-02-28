curl -X POST http://127.0.0.1:8000/api/chat    -H "Content-Type: application/json"   -d '{
    "conversation": [
        {"message": "Good day! Welcome to your personalized AI assistant CFO; this feature allows you to leverage the power of AI to measure, grow and report on the overall health of your business. This AI assistant securely & confidentially links seamlessly with all of your corporate banking accounts & your ERP system in order to provide invaluable insights. This includes a real time live view of your total working capital so you can avoid any nasty surprises. I will begin by initialising these integrations and using this data to build out a live dashboard with key metrics that help you understand and communicate with more confidence about the current state of your fir<br>Before we proceed, may I kindly ask for your business name?", "user": false}, 
        {"message": "XY Global", "user": true}, 
        {"message": "Next, I would like to confirm if its acceptable to continue and request some information regarding all the business banks associated with your account. This data will only be used for the purposes of building you a bespoke business dashboard through the power of generative AI.<br>Please provide the name of all banks your business has current relationships with.<br>Rest assured, your data will be handled securely and kept confidential.", "user": false}, 
        {"message": "Barclays, Natwest", "user": true}
    ], 
    "data": {
        "banksQueue": [], 
        "bankInfo": [], 
        "businessName": "XY Global", 
        "erpInfo": [], 
        "shownComponents": [], 
        "shownTopComponents": []
    }
}'