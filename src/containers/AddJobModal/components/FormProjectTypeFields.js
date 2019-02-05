import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormProjectTypeFields extends Component {

  state = {
    projectType: '',
  }

  handleClickProject = (e) => {
    const value = e.currentTarget.value;
    this.setState ({
      projectType: value,
    })
  }

  render() {
    return(
      <div className="form-block form-block-flex">
        <h2>Project type</h2>
        <div className="checkbox-element">
          <span className="checkbox-circle">
            <span
              className={this.state.projectType === "one_time" ? "icon-check-mark" : "non-check"}
            ></span>
          </span>
          <label className="checkbox-label">
            <Field
              name="time_type"
              component="input"
              type="radio"
              value="one_time"
              className="checkbox-input"
              onClick={this.handleClickProject}
            />
            One time
          </label>
        </div>
        <div className="checkbox-element">
          <span className="checkbox-circle">
            <span
              className={this.state.projectType === "long_term" ? "icon-check-mark" : "non-check"}
            ></span>
          </span>
          <label className="checkbox-label">
            <Field
              name="time_type"
              component="input"
              type="radio"
              value="long_term"  
              className="checkbox-input"
              onClick={this.handleClickProject}
            />
            Long term
          </label>
        </div>
        <div className="checkbox-element">
          <span className="checkbox-circle">
            <span
              className={this.state.projectType === "short" ? "icon-check-mark" : "non-check"}
            ></span>
          </span>
          <label className="checkbox-label">
            <Field
              name="time_type"
              component="input"
              type="radio"
              value="short" 
              className="checkbox-input"
              onClick={this.handleClickProject}
            />
            Short
          </label>
        </div>
        <div className="checkbox-element">
          <span className="checkbox-circle">
            <span
              className={this.state.projectType === "not_sure" ? "icon-check-mark" : "non-check"}
            ></span>
          </span>
          <label className="checkbox-label">
            <Field
              name="time_type"
              component="input"
              type="radio"
              value="not_sure"  
              className="checkbox-input"
              onClick={this.handleClickProject}
            />
            Not sure
          </label>
        </div>
      </div>
    )
  }
}

export default FormProjectTypeFields