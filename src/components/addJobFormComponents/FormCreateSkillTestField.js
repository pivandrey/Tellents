import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormCreateSkillTestField extends Component {

  render() {
    return(
      <div className="form-block">
        <div>
          <label>
            <Field 
              name="create_skill_flag"
              component="input"
              type="checkbox"
              checked={true}
            />
            Create Skill Test
          </label>
        </div>
        <div>
          <Field
            name="promotion_title"
            component="input"
            type="text"
            placeholder="Job Title"
          />
        </div>
        <div>
          <Field
            name="promotion_description"
            component="textarea"
            placeholder="Job Decription"
          />
        </div>
      </div>
    )
  }
}

export default FormCreateSkillTestField