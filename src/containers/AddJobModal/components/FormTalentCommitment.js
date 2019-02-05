import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormTalentCommitment extends Component {

  state = {
    commitment: '',
  }

  handleClickCommitment = (e) => {
    const value = e.currentTarget.value;
    this.setState ({
      commitment: value,
    })
  }

  render() {
    return(
      <div className="form-block form-block-flex">
        <h2>Talent Commitment</h2>
        <div className="checkbox-element">
          <span className="checkbox-circle">
            <span
              className={this.state.commitment === "decide_later" ? "icon-check-mark" : "non-check"}
            ></span>
          </span>
          <label className="checkbox-label">
            <Field
              name="commitment"
              component="input"
              type="radio"
              value="decide_later"
              className="checkbox-input"
              onClick={this.handleClickCommitment}
            />
            I will Decide Later
          </label>
        </div>
        <div className="checkbox-element">
          <span className="checkbox-circle">
            <span
              className={this.state.commitment === "per_week_10" ? "icon-check-mark" : "non-check"}
            ></span>
          </span>
          <label className="checkbox-label">
            <Field
              name="commitment"
              component="input"
              type="radio"
              value="per_week_10"
              className="checkbox-input"
              onClick={this.handleClickCommitment}
            />
            10 hrs per week
          </label>
        </div>
        <div className="checkbox-element">
          <span className="checkbox-circle">
            <span
              className={this.state.commitment === "per_week_30" ? "icon-check-mark" : "non-check"}
            ></span>
          </span>
          <label className="checkbox-label">
            <Field
              name="commitment"
              component="input"
              type="radio"
              value="per_week_30"
              className="checkbox-input"
              onClick={this.handleClickCommitment}    
            />
            Up to 30 hrs per week
          </label>
        </div>
        <div className="checkbox-element">
          <span className="checkbox-circle">
            <span
              className={this.state.commitment === "per_week_more_than_30" ? "icon-check-mark" : "non-check"}
            ></span>
          </span>
          <label className="checkbox-label">
            <Field
              name="commitment"
              component="input"
              type="radio"
              value="per_week_more_than_30"
              className="checkbox-input"
              onClick={this.handleClickCommitment} 
            />
            More than 30 hrs per week
          </label>
        </div>
      </div>
    )
  }
}

export default FormTalentCommitment