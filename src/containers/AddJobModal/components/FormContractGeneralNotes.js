import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormContractGeneralNotes extends Component {

  render() {
    return(
      <div className="form-block-comments">
        <h2>Contract General Notes</h2>
        <div>
          <Field
            name="contract_general_notes"
            component="textarea"
            placeholder="Enter here Comments for the contract"
            className="comments-form"
          />
        </div>
      </div>
    )
  }
}

export default FormContractGeneralNotes