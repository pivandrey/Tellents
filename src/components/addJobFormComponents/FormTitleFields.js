import React, { Component } from 'react';
import { Field } from 'react-final-form';

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
          />
        </div>
        <div>
          <Field
            name="description"
            component="textarea"
            placeholder="Job Decription"
          />
        </div>
      </div>
    )
  }
}

export default FormTitleFields