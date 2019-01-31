import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormTimeFields extends Component {

  render() {
    return(
      <div className="form-block">
        <h2>Estimated time to complete the Job</h2>
        <div>
          <Field
            name="period"
            component="input"
            type="text"
          />
        </div>
        <button className="form-period-type-btn">"TYPE"</button>
        <div className="form-period-type-block">
          <div>
            <label>
              <Field
                name="period_type"
                component="input"
                type="checkbox"
                value="day"
              />
              DAY
            </label>
          </div>
          <div>
            <label>
              <Field
                name="period_type"
                component="input"
                type="checkbox"
                value="week"
              />
              WEEK
            </label>
          </div>
          <div>
            <label>
              <Field
                name="period_type"
                component="input"
                type="checkbox"
                value="month"
              />
              MONTH
            </label>
          </div>
          <div>
            <label>
              <Field
                name="period_type"
                component="input"
                type="checkbox"
                value="year"
              />
              YEAR
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default FormTimeFields