export const validateContactForm = (values) =>{
    const errors ={};

    if(!values.firstName){
       errors.firstName= "required";
    }else if (values.firstName.length < 2){
        errors.firstName = 'Must be at least 2 characters';
    } else if(values.firstName.length > 15){
        errors.firstName = "Must be 15 Characters or less"
    }

    if(!values.lasttName){
        errors.lastName= "required";
     }else if (values.lastName.length < 2){
         errors.lastName = 'Must be at least 2 characters';
     } else if(values.lastName.length > 15){
         errors.lastName = "Must be 15 Characters or less"
     }

     const reg = /^\d+$/;
     if(!reg.test(values.phoneNum)){
        errors.phoneNum = 'The phone number should contian only numbers.';
     }

     if(!values.email.includes('@')){
        errors.email = 'Email should contain a @';
     }


     return errors;
};
