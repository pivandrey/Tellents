import React, { Component } from 'react';
import { Field } from 'react-final-form';

import './formsStyle.css';

class FormCreateSkillTestField extends Component {

  render() {
    return(
      <div className="form-block form-block-createskill">
        <div className="form-create-check">
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
            placeholder="Skill Test Title"
            className="form-title-input"
          />
        </div>
        <div>
          <Field
            name="promotion_description"
            component="textarea"
            placeholder="Skill Test Description"
            className="form-title-textarea"
          />
        </div>
      </div>
    )
  }
}

export default FormCreateSkillTestField