import React, { Component } from 'react'

import '../style/filterJobs.css'

class FilterBudget extends Component {
  render() {
    return(
      <div>
        <p>Budget:</p>
        <select name="bud">
          <option value="i0_100" onClick={this.props.handleClick} >$0 - $100</option>
          <option value="i100_300" onClick={this.props.handleClick} >$100 - $300</option>
          <option value="i300_1000" onClick={this.props.handleClick} >$300 - $1000</option>
          <option value="more_1000" onClick={this.props.handleClick} >>$1000</option>
          <option value="undefined" onClick={this.props.handleClick} >Not defined (Empty)</option>
        </select>
      </div>
    )
  }
}
  
export default FilterBudget