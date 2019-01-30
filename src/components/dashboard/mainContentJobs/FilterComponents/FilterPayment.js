import React, { Component } from 'react'

import '../style/filterJobs.css'

class FilterPayment extends Component {
  render() {
    return(
      <div>
        <p>Payment:</p>
        <div className="filter-checkbox">
          <label><input 
            type="checkbox" 
            name="payment" 
            value="fixed_price" 
            onClick={this.props.handleClick} 
          />Fixed Price</label>
          <label><input 
            type="checkbox" 
            name="payment" 
            value="hourly" 
            onClick={this.props.handleClick} 
          />Hourly</label>
        </div>
        <form>
          <input type="text" name="p_from" placeholder="40" className="payment-min" /> 
          <span className="payment-between">to</span>
          <input type="text" name="p_to" placeholder="1000" className="payment-max" />
          <button type="submit" className="payment-submit">Find</button>
        </form>
      </div>
    )
  }
}
  
export default FilterPayment