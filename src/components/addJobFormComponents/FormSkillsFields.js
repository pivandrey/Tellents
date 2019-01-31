import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormSkillsFields extends Component {

  render() {
    const data = []
    return(
      <div className="form-block">
        {
          data.map((category) => (
            <div>
              <label>
                <Field 
                  key={"category" + category.id}
                  name="category"
                  component="input"
                  type="radio"
                  value={category.id}
                />
                {category.name}
              </label>
            </div>
          ))
        }
      </div>
    )
  }
}

export default FormSkillsFields