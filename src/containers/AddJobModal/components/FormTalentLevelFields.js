import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormTalentLevelFields extends Component {

  state = {
    level: '',
  }

  handleClickLevel = (e) => {
    const value = e.currentTarget.value;
    this.setState ({
      level: value,
    })
  }

  render() {
    return(
      <div className="form-block form-block-flex">
        <h2>Talent Level</h2>
        <div className="checkbox-element">
          <span className="checkbox-circle">
            <span
              className={this.state.level === "intern" ? "icon-check-mark" : "non-check"}
            ></span>
          </span>
          <label className="checkbox-label">
            <Field
              name="level"
              component="input"
              type="radio"
              value="intern"
              className="checkbox-input"
              onClick={this.handleClickLevel}
            />
            Intern
          </label>
        </div>
        <div className="checkbox-element">
          <span className="checkbox-circle">
            <span
              className={this.state.level === "junior" ? "icon-check-mark" : "non-check"}
            ></span>
          </span>
          <label className="checkbox-label">
            <Field
              name="level"
              component="input"
              type="radio"
              value="junior"
              className="checkbox-input"
              onClick={this.handleClickLevel}
            />
            Junior
          </label>
        </div>
        <div className="checkbox-element">
          <span className="checkbox-circle">
            <span
              className={this.state.level === "senior" ? "icon-check-mark" : "non-check"}
            ></span>
          </span>
          <label className="checkbox-label">
            <Field
              name="level"
              component="input"
              type="radio"
              value="senior"   
              className="checkbox-input"
              onClick={this.handleClickLevel}      
            />
            Senior
          </label>
        </div>
        <div className="checkbox-element">
          <span className="checkbox-circle">
            <span
              className={this.state.level === "expert" ? "icon-check-mark" : "non-check"}
            ></span>
          </span>
          <label className="checkbox-label">
            <Field
              name="level"
              component="input"
              type="radio"
              value="expert"   
              className="checkbox-input"
              onClick={this.handleClickLevel}
            />
            Expert
          </label>
        </div>
      </div>
    )
  }
}

export default FormTalentLevelFields