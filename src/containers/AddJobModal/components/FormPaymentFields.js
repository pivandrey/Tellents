import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormPaymentFields extends Component {
  
  state = {
    fixedPayment: false,
    clickFlag: false,
  }

  fixedPayment = (e) => {
    if (e.currentTarget.checked) {
      this.setState ({
        fixedPayment: true,
        clickFlag: true,
      })
    }; 
  };

  hourlyPayment = (e) => {
    if (e.currentTarget.checked) {
      this.setState ({
        fixedPayment: false,
        clickFlag: true,
      })
    };
  };

  render() {
    return(
      <div className="form-block-payment-all">
        <div className="form-block-payment">
          <h2>Job Payment</h2>
          <div className="form-payment">
            <div className="checkbox-element">
              <span className="checkbox-circle">
                <span
                  className={this.state.fixedPayment ? "icon-check-mark" : "non-check"}
                ></span>
              </span>
              <label className="checkbox-label">
                <Field 
                  component="input"
                  type="radio" 
                  name="payment" 
                  value="fixed" 
                  onClick={this.fixedPayment}
                  className="checkbox-input"
                />
                Fixed price
              </label>
            </div>
            <div className="payment-hourly-input">
              <div className="checkbox-element">
                <span className="checkbox-circle">
                  <span
                    className={(!this.state.fixedPayment && this.state.clickFlag) ? "icon-check-mark" : "non-check"}
                  ></span>
                </span>
                <label className="checkbox-label">
                  <Field 
                    component="input"
                    type="radio" 
                    name="payment" 
                    value="hourly" 
                    onClick={this.hourlyPayment}
                    className="checkbox-input"
                  />
                  Hourly
                </label>
              </div>
              <label>
                <Field
                  name="hourly_price"
                  component="input"
                  type="text"
                  disabled={this.state.fixedPayment}
                  className="hourly-rate"
                />
                $ / hour
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2>Job Price</h2>
          <div>
            <Field name="price">
            {({ input, meta }) => (
              <div>
                <input {...input} 
                  id="price" 
                  type="text"
                  className="hourly-rate"
                />
                <label htmlFor="price">$</label>
                <br/>{meta.error && meta.touched && <span className="error">{meta.error}</span>}
              </div>
            )}
          </Field>
          </div>
          <p>Enter here how much you think it should cost you..</p>
        </div>
      </div>
    )
  }
}

export default FormPaymentFields