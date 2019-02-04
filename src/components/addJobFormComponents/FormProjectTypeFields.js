import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormProjectTypeFields extends Component {

  render() {
    return(
      <div className="form-block form-block-flex">
        <h2>Project type</h2>
        <div>
          <label>
            <Field
              name="time_type"
              component="input"
              type="radio"
              value="one_time"
            />
            One time
          </label>
        </div>
        <div>
          <label>
            <Field
              name="time_type"
              component="input"
              type="radio"
              value="long_term"  
            />
            Long term
          </label>
        </div>
        <div>
          <label>
            <Field
              name="time_type"
              component="input"
              type="radio"
              value="short" 
            />
            Short
          </label>
        </div>
        <div>
          <label>
            <Field
              name="time_type"
              component="input"
              type="radio"
              value="not_sure"  
            />
            Not sure
          </label>
        </div>
      </div>
    )
  }
}

export default FormProjectTypeFields