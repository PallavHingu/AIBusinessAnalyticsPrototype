const prompts = [
    {
      id:'Greet',
      message:'Hi!',
      trigger:'Prompt1'
    },
    {
      id:'Prompt1',
      message:'Would you like to proceed to generate AI dashboard app?',
      trigger:'options1'
    },
    {
      id:'options1',
      options:[
        {value: "Yes", label: "Yes", trigger: "Yes1"},
        {value: "No", label: "No", trigger: "No1"}
      ]
    },
    {
      id: 'No1',
      message:'End of chat.',
      end:true
    },
    {
      id:'Yes1',
      message:'We would like to connect your data sources such as your bank accounts and ERP system.',
      trigger:'prompt2'
    },
    {
      id:'prompt2',
      message:'Would you like us to integrate with all the products and banking facilities that you have with us?',
      trigger:'options2'
    },
    {
      id:'options2',
      options:[
        {value: "Yes", label: "Yes", trigger: "Yes2"},
        {value: "No", label: "No", trigger: "No2"}
      ]
    },
    {
        id: 'Yes2',
        message:'Do you have any other banking relationships that you would like us to integrate with?',
        trigger:'options3'
    },
    {
        id:'options3',
        options:[
            {value: "Yes", label: "Yes", trigger: "Yes3"},
            {value: "No", label: "No", trigger: "No3"}
        ]
    },
    {
        id: 'No2',
        message:'Which products would you like us to integrate with?',
        trigger:'productSelection'
    },
    {
        id:'productSelection',
        options:[
            {value: "Product 1", label: "Product 1", trigger: "Product1"},
            {value: "Product 2", label: "Product 2", trigger: "Product2"}
        ]
    },
    {
        id: 'Product1',
        message:'Do you have any other banking relationships that you would like us to integrate with?',
        trigger:'options3'
    },
    {
        id: 'Product2',
        message:'Do you have any other banking relationships that you would like us to integrate with?',
        trigger:'options3'
    },
    {
        id: 'Yes3',
        message:'Single bank or multiple bank?',
        trigger:'bankOption'
    },
    {
        id:'bankOption',
        options:[
            {value: "Single", label: "Single", trigger: "Single"},
            {value: "Multiple", label: "Multiple", trigger: "Multiple"}
        ]
    },
    {
        id: 'Single',
        message:'Please provide us with the consent to use your data with 3rd parties to support payments/loans etc.',
        trigger:'prompt3'
    },
    {
        id: 'Multiple',
        message:'Please provide us with the consent to use your data with 3rd parties to support payments/loans etc.',
        trigger: 'prompt3'
    },
    {
        id: 'No3',
        message:'Please provide us with the consent to use your data with 3rd parties to support payments/loans etc.',
        trigger:'prompt3'
    },
    {
        id: 'prompt3',
        message:'Would you like us to connect with your ERP system?',
        trigger:'options4'
    },
    {
        id:'options4',
        options:[
            {value: "Yes", label: "Yes", trigger: "Yes4"},
            {value: "No", label: "No", trigger: "No4"}
        ]
    },
    {
        id:'No4',
        message:'End of chat.',
        end:true 
    },
    {
        id:'Yes4',
        message:'Please select which ERP system you use and allow us to connect with.',
        trigger:'ERPoption'
    },
    {
        id:'ERPoption',
        options:[
            {value: "ERP 1", label: "ERP 1", trigger: "ERP1"},
            {value: "ERP 2", label: "ERP 2", trigger: "ERP2"}
        ]
    },
    {
        id:'ERP1',
        message:'Thank you we have completed your integrations and will now build your dashboard.',
        end:true
    },
    {
        id:'ERP2',
        message:'Thank you we have completed your integrations and will now build your dashboard.',
        end:true
    }
];

export default prompts;
