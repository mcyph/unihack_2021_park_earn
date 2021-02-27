import React from "react";

let FormContext = React.createContext('light');

let utility = {
  isArray: (a)=>{
    // Get whether a is an array ([])
    return (!!a) && (a.constructor === Array);
  },
  isLiteralObject: (a)=>{
    // Get whether a is a literal object ({})
    return (!!a) && (a.constructor === Object);
  },

  getFormContext: ()=>{
    return FormContext;
  },
  onChange: (form, localOnChange, name, value)=>{
    // Send to any immediate callbacks
    if (localOnChange) {
      return localOnChange(value);
    }
    // Send to form control is contained in (if present)
    if (form && form.__onChildChange) {
      return form.__onChildChange(name, value);
    }
  },
  getValue: (form, childValue, name)=>{
    // First try using the provided value from the child
    if (childValue !== undefined) {
      return childValue;
    }
    // Next try using the value from the form
    else if (form && form.__getValueFromChild) {
      return form.__getValueFromChild(name);
    }
    return undefined;
  },
  validate: (form, localValidate, name, value)=>{
    // TODO: Elaborate on how to deal with Joi!!
    if (localValidate) {
      return localValidate.validate(value);
    }
    else if (form && form.__getValidatorFromChild
                  && form.__getValidatorFromChild(name)) {
      return form.__getValidatorFromChild(name).validate(value);
    }
  },
  hasValidator: (form, localValidate, name)=> {
    if (localValidate) {
      return true;
    }
    else if (form && form.__getValidatorFromChild
                  && form.__getValidatorFromChild(name)) {
      return true;
    }
    return false;
  }
};

export default utility;
