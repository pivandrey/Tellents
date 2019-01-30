import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'

import './addJobModalStyle.css'

class AddJobModal extends Component {
  render() {
    return(
      <div className="modal-window">
        <div className='modal-header'>
          <button className="modal-exit">X</button>
        </div>
        <div className="modal-body">
          <h1>Post a Job</h1>
          <Form
            onSubmit={this.onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-block">
                  <div>
                    <Field
                      name="job.title"
                      component="input"
                      type="text"
                      placeholder="Job Title"
                    />
                  </div>
                  <div>
                    <Field
                      name="job.description"
                      component="textarea"
                      placeholder="Job Decription"
                    />
                  </div>
                </div>
                <div className="form-block">
                  <div className="form-block-skill">
                    <h2>Choose Your Skill Category</h2>
                    <label>
                      <Field 
                        name="categories"
                        component="input"
                        type="radio"
                        value="1583"
                      />
                      Web, Mobile & Software Dev
                    </label>
                    <label>
                      <Field 
                        name="categories"
                        component="input"
                        type="radio"
                        value="1586"
                      />
                      IT & Networking
                    </label>
                    <label>
                      <Field 
                        name="categories"
                        component="input"
                        type="radio"
                        value="1589"
                      />
                      Data Science & Analytics
                    </label>
                    <label>
                      <Field 
                        name="categories"
                        component="input"
                        type="radio"
                        value="1592"
                      />
                      Engineering & Architecture
                    </label>
                    <label>
                      <Field 
                        name="categories"
                        component="input"
                        type="radio"
                        value="1595"
                      />
                      Design & Creative
                    </label>
                    <label>
                      <Field 
                        name="categories"
                        component="input"
                        type="radio"
                        value="1598"
                      />
                      Writing
                    </label>
                    <label>
                      <Field 
                        name="categories"
                        component="input"
                        type="radio"
                        value="1601"
                      />
                      Translation
                    </label>
                    <label>
                      <Field 
                        name="categories"
                        component="input"
                        type="radio"
                        value="1604"
                      />
                      Legal
                    </label>
                    <label>
                      <Field 
                        name="categories"
                        component="input"
                        type="radio"
                        value="1607"
                      />
                      Admin Support
                    </label>
                    <label>
                      <Field 
                        name="categories"
                        component="input"
                        type="radio"
                        value="1610"
                      />
                      Customer Service
                    </label>
                    <label>
                      <Field 
                        name="categories"
                        component="input"
                        type="radio"
                        value="1613"
                      />
                      Sales & Marketing
                    </label>
                    <label>
                      <Field 
                        name="categories"
                        component="input"
                        type="radio"
                        value="1616"
                      />
                      Accounting & Consulting
                    </label>
                  </div>
                  <div>
                    <h3>Translation</h3>
                    <div className="job-translation">
                      <label>
                        <Field
                          name="category.skill_categories"
                          component="input"
                          type="checkbox"
                          value="all"
                        />
                        All Translation
                      </label>
                      <label>
                        <Field
                          name="category.skill_categories"
                          component="input"
                          type="checkbox"
                          value="general"
                        />
                        General Translation
                      </label>
                      <label>
                        <Field
                          name="category.skill_categories"
                          component="input"
                          type="checkbox"
                          value="legal"
                        />
                        Legal Translation
                      </label>
                      <label>
                        <Field
                          name="category.skill_categories"
                          component="input"
                          type="checkbox"
                          value="medical"
                        />
                        Medical Translation
                      </label>
                      <label>
                        <Field
                          name="category.skill_categories"
                          component="input"
                          type="checkbox"
                          value="technical"
                        />
                        Technical Translation
                      </label>
                    </div>
                    <div>
                      <Field
                        name="new_skill"
                        component="input"
                        type="text"
                        placeholder="Write new skill"
                      />
                    </div>
                  </div>
                  <div className="form-block">
                    
                  </div>
                </div>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
            )}
          />
        </div>
      </div>
    )
  }
}

export default AddJobModal;