import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';

import '../style/filterJobs.css';

class FilterPayment extends Component {

  setCheckForInput = (value) => {
    const filters = this.props.filter;
      if (filters.indexOf(value) >= 0) {
        return true;
      }
  };

  onSubmit = (values) => {
    this.props.handleClickSubmit(values)
  };

  setDefaultValueToPaymentMin = () => {
    const filterPriceFrom = this.props.filterPriceFrom;
    if (filterPriceFrom) {
      return filterPriceFrom
    } else {
      return 40
    }
  };

  setDefaultValueToPaymentMax = () => {
    const filterPriceTo = this.props.filterPriceTo;
    if (filterPriceTo) {
      return filterPriceTo
    } else {
      return 1000
    }
  };

  render() {
    return(
      <div>
        <p>Payment:</p>
        <div className="filter-checkbox filter-payment">
          <label><input 
            type="checkbox" 
            name="payment" 
            value="fixed_price" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("fixed_price")}
          />Fixed Price</label>
          <label><input 
            type="checkbox" 
            name="payment" 
            value="hourly" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("hourly")}
          />Hourly</label>
        </div>
        <Form 
          onSubmit={this.onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div className="paymentForm">
                <Field
                  name="p_from"
                  component="input"
                  type="text"
                  placeholder={this.setDefaultValueToPaymentMin()}
                  className="payment-min"
                />
              </div>
                <span className="payment-between">to</span>
              <div className="paymentForm">
                <Field
                  name="p_to"
                  component="input"
                  type="text"
                  placeholder={this.setDefaultValueToPaymentMax()}
                  className="payment-max"
                />
              </div>
              <div className="paymentForm">
                <button type="submit" className="payment-submit">Find</button>
              </div>
            </form>
          )}
        />
      </div>
    )
  };
};

FilterPayment.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterPriceFrom: PropTypes.string.isRequired,
  filterPriceTo: PropTypes.string.isRequired,
  handleClickSubmit: PropTypes.func.isRequired,
};
  
export default FilterPayment;