import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormPaymentFields extends Component {

  render() {
    return(
      <div className="form-block">
        <div className="form-block-payment">
          <h2>Job Payment</h2>
          <div>
            <label>
              <input 
                type="radio" 
                name="type_payment" 
                value="fixed" 
              />
              Fixed price
            </label>
            <label>
              <input 
                type="radio" 
                name="type_payment" 
                value="hourly" 
              />
              Hourly
            </label>
          </div>
          <div>
            <label>
              <Field
                name="hourly_price"
                component="input"
                type="text"
              />
              $ / hour
            </label>
          </div>
        </div>
        <div>
          <h2>Job Price</h2>
          <div>
            <label>
              <Field
                name="price"
                component="input"
                type="text"
              />
              $
            </label>
          </div>
          <p>Enter here how much you think it should cost you..</p>
        </div>
      </div>
    )
  }
}

export default FormPaymentFields