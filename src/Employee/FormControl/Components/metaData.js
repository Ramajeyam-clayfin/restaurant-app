export let initialState =   {
        
    name : { 
      name:'name',
        type: 'text',
        title:"Name : ",
        value: '',
        placeholder: '',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 4,
          maxLength: 20,
          isRequired: true,
         },
      },

      empid : {  
        name:'empid',
        type: 'number',
        title:"Employee ID : ",
        value: '',
        placeholder: '',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 1,
          isRequired: true,
          isNumber: true
         },
      },

      position: {
        name:'position',
        type: 'select',
        title:"Position : ",
        value: '',
        placeholder: 'Choose...',
        valid: false,
        errorMsg: '',
        touched: false,
         validationRules: {
          isRequired: true,
        },
         options: [
          { value: 'Waiter', displayValue: 'Waiter' },
          { value: 'Chef', displayValue: 'Chef'},
          { value: 'Cashier', displayValue: 'Cashier'},
          { value: 'Cook', displayValue: 'Cook'}
        ]
      },

      branch: {
        name:'branch',
        type: 'select',
        title:"Branch : ",
        value: '',
        placeholder: 'Choose...',
        valid: false,
        errorMsg: '',
        touched: false,
         validationRules: {
          isRequired: true,
        },
         options: [
          { value: 'Chennai', displayValue: 'Chennai' },
          { value: 'Salem', displayValue: 'Salem'},
          { value: 'Pondicherry', displayValue: 'Pondicherry'},
          { value: 'coimbatore', displayValue: 'coimbatore'}
        ]
      },

      joindate : {  
        name:'joindate',
        type: 'date',
        title:"joining Date : ",
        value: '',
        placeholder: '',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          isRequired: true,
         },
      },

      salary : {  
        name:'salary',
        type: 'number',
        title:"Salary : ",
        value: '',
        placeholder: '',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 3,
          isRequired: true,
          isNumber: true
         },
      },


      gender: {
        name:'gender',
        type: 'radio',
        title:"Gender : ",
        value: '',
        placeholder: 'Gender',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          isRequired: true,
        },
        options: [
          { value: 'Male', displayValue: 'Male' },
          { value: 'Female', displayValue: 'Female'}
        ]
      },

      dob : {  
        name:'dob',
        type: 'date',
        title:"D.O.B : ",
        value: '',
        placeholder: '',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          isRequired: true,
         },
      },

      email: {
        name:'email',
        type: 'text',
        title:"Email : ",
        value: '',
        placeholder: 'Enter Email ID',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          isRequired: true,
          isEmail: true
        },
      },

      mobile : {  
        name:'mobile',
        type: 'number',
        title:"Mobile : ",
        value: '',
        placeholder: 'Enter Your Mobile Number',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 10,
          maxLength: 12,
          isRequired: true,
          isNumber: true
        },
      },

        line1: {
          name:'line1',
            type: 'text',
            title:"Address : ",
            value: '',
            placeholder: 'Address Line 1',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 2,
                isRequired: true
            }
        },
        line2: {
          name:'line2',
            type: 'text',
            title:"",
            value: '',
            placeholder: 'Address Line 2',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
            minLength: 4,
            isRequired: true
            }
        },
        city: {
          name:'city',
            type: 'text',
            title:"",
            value: '',
            placeholder: 'City',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 4,
                isRequired: true
            }
        },
        state: {
          name:'state',
            type: 'select',
            title:"",
            value: '',
            placeholder: 'State',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                isRequired: true
            },
            options: [
              { value: 'Tamil Nadu', displayValue: 'Tamil Nadu' },
              { value: 'Kerala', displayValue: 'Kerala'},
              { value: 'Pondicherry', displayValue: 'Pondicherry'},
              { value: 'Karnataka', displayValue: 'Karnataka'}
            ]
        },
        zipcode: {
          name:'zipcode',
            type: 'number',
            title:" ",
            value: '',
            placeholder: 'Zipcode',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 6,
                isRequired: true
            }
        },
        country: {
          name:'country',
            type: 'select',
            title:"Country : ",
            value: '',
            placeholder: 'Country',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
              isRequired: true,
            },
            options: [
              { value: 'India', displayValue: 'India' },
              { value: 'Australia', displayValue: 'Australia'},
              { value: 'China', displayValue: 'China'}
            ]
          },

      about: {
        name:'about',
        type: 'textarea',
        title:"About : ",
        value: '',
        placeholder: 'Tell About Yourself...',
        valid: false,
        errorMsg: '',
        touched: true,
        validationRules: {
        },
      },
  };