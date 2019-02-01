import React, { Component } from 'react';
import { Field } from 'react-final-form';

import './formsStyle.css'

class FormTitleFields extends Component {

  render() {
    return(
      <div className="form-block">
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Job Title"
            className="form-title-input"
          />
        </div>
        <div>
          <Field
            name="description"
            component="textarea"
            placeholder="Job Decription"
            className="form-title-textarea"
          />
        </div>
      </div>
    )
  }
}

export default FormTitleFields