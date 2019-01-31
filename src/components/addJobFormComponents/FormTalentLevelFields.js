import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormTalentLevelFields extends Component {

  render() {
    return(
      <div className="form-block">
        <h2>Talent Level</h2>
        <div>
          <label>
            <Field
              name="level"
              component="input"
              type="radio"
              value="intern"
            />
            Intern
          </label>
        </div>level
        <div>
          <label>
            <Field
              name="level"
              component="input"
              type="radio"
              value="junior"
            />
            Junior
          </label>
        </div>
        <div>
          <label>
            <Field
              name="level"
              component="input"
              type="radio"
              value="senior"         
            />
            Senior
          </label>
        </div>
        <div>
          <label>
            <Field
              name="level"
              component="input"
              type="radio"
              value="expert"   
            />
            Expert
          </label>
        </div>
      </div>
    )
  }
}

export default FormTalentLevelFields