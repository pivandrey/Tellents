import React, { Component } from 'react';
import { Field } from 'react-final-form';

import './formsStyle.css'

class FormTitleFields extends Component {

  render() {
    return(
      <div className="form-block">
        <div>
          <Field name="title">
            {({ input, meta }) => (
              <div>
                <input {...input} 
                  id="title" 
                  type="text" 
                  placeholder="Job Title" 
                  className="form-title-input"
                />
                <br/>{meta.error && meta.touched && <span className="error">{meta.error}</span>}
              </div>
            )}
          </Field>
        </div>
        <div>
          <Field name="description">
            {({ input, meta }) => (
              <div>
                <input {...input} 
                  id="title" 
                  type="text" 
                  placeholder="Job Decription" 
                  className="form-title-textarea"
                />
                <br/>{meta.error && meta.touched && <span className="error">{meta.error}</span>}
              </div>
            )}
          </Field>
        </div>
      </div>
    )
  }
}

export default FormTitleFields