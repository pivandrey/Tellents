import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormPaymentFields extends Component {
  
  state = {
    fixedPayment: false,
  }

  fixedPayment = (e) => {
    if (e.currentTarget.checked) {
      this.setState ({
        fixedPayment: true,
      })
    }; 
  };

  hourlyPayment = (e) => {
    if (e.currentTarget.checked) {
      this.setState ({
        fixedPayment: false,
      })
    };
  };

  render() {
    return(
      <div className="form-block-payment-all">
        <div className="form-block-payment">
          <h2>Job Payment</h2>
          <div className="form-payment">
            <label>
              <Field 
                component="input"
                type="radio" 
                name="payment" 
                value="fixed" 
                onClick={this.fixedPayment}
              />
              Fixed price
            </label>
            <div>
              <label>
                <Field 
                  component="input"
                  type="radio" 
                  name="payment" 
                  value="hourly" 
                  onClick={this.hourlyPayment}
                />
                Hourly
              </label>
            
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