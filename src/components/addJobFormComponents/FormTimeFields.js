import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormTimeFields extends Component {

  state = {
    showPeriods: false,
    typeTime: "DAY",
  }

  showPeriodTime = () => {
    this.setState ({
      showPeriods: !this.state.showPeriods,
    })
  }

  clickOnInput = (e) => {
    const value = e.currentTarget.value;
    this.setState ({
      showPeriods: false,
      typeTime: value,
    })
  }

  render() {
    return(
      <div className="form-block-time">
        <h2>Estimated time to complete the Job</h2>
        <div className="form-block-time-content">
          <div>
            <Field
              name="period"
              component="input"
              type="text"
              className="time-input"
            />
          </div>
          <button 
            className="form-period-type-btn" 
            onClick={this.showPeriodTime}
            type="button"
          >{this.state.typeTime}</button>
          {this.state.showPeriods && 
            <div className="form-period-type-block">
              <div>
                <label>
                  <Field
                    name="period_type"
                    component="input"
                    type="radio"
                    value="day"
                    onClick={this.clickOnInput}
                  />
                  DAY
                </label>
              </div>
              <div>
                <label>
                  <Field
                    name="period_type"
                    component="input"
                    type="radio"
                    value="week"
                    onClick={this.clickOnInput}
                  />
                  WEEK
                </label>
              </div>
              <div>
                <label>
                  <Field
                    name="period_type"
                    component="input"
                    type="radio"
                    value="month"
                    onClick={this.clickOnInput}
                  />
                  MONTH
                </label>
              </div>
              <div>
                <label>
                  <Field
                    name="period_type"
                    component="input"
                    type="radio"
                    value="year"
                    onClick={this.clickOnInput}
                  />
                  YEAR
                </label>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default FormTimeFields