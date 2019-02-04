import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormTalentCommitment extends Component {

  render() {
    return(
      <div className="form-block form-block-flex">
        <h2>Talent Commitment</h2>
        <div>
          <label>
            <Field
              name="commitment"
              component="input"
              type="radio"
              value="decide_later"
            />
            I will Decide Later
          </label>
        </div>
        <div>
          <label>
            <Field
              name="commitment"
              component="input"
              type="radio"
              value="per_week_10"
            />
            10 hrs per week
          </label>
        </div>
        <div>
          <label>
            <Field
              name="commitment"
              component="input"
              type="radio"
              value="per_week_30"    
            />
            Up to 30 hrs per week
          </label>
        </div>
        <div>
          <label>
            <Field
              name="commitment"
              component="input"
              type="radio"
              value="per_week_more_than_30" 
            />
            More than 30 hrs per week
          </label>
        </div>
      </div>
    )
  }
}

export default FormTalentCommitment