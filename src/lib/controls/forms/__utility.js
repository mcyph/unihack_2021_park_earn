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
      localOnChange(value);
      return true;
    }
    // Send to form control is contained in (if present)
    if (form && form.__onChildChange) {
      form.__onChildChange(name, value);
      return true;
    }
    return false
  },
  getValue: (form, childValue, name)=>{
    // First try using the provided value from the child
    if (childValue !== undefined) {
      if (form && form.__setValueFromChild) {
        form.__setValueFromChild(name, childValue);
      }
      return childValue;
    }
    // Next try using the value from the form
    else if (form && form.__getValueFromChild) {
      return form.__getValueFromChild(name);
    }
    return undefined;
  },
  validate: (form, localValidate, name, value)=>{
    // Returns null/undefined on success,
    // or the error string when validation fails
    if (localValidate) {
      let r = localValidate.validate({name: value});
      return r[name]['error'] || null;
    }
    else if (form && form.__getValidatorFromChild
                  && form.__getValidatorFromChild(name)) {
      let r = form.__getValidatorFromChild(name).validate({name: value});
      return r[name]['error'] || null;
    }
    return null;
  },
  hasValidator: (form, localValidate, name)=>{
    // Returns a boolean indicating whether "name"
    // has a validator associated with it
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
