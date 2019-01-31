import React, { Component } from 'react'

import '../style/filterTalents.css'

class FilterFreelancerRate extends Component {

  setCheckForInput = (value) => {
    const filters = this.props.filter;
      if (filters.indexOf(value) >= 0) {
        return true;
      }
  }

  render() {
    return(
      <div>
        <p>Freelancer Rate:</p>
        <div className="filter-checkbox">
          <label><input 
            type="radio" 
            name="rate" 
            value="i_5" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("i_5")}
          />Best (5)</label>
          <label><input 
            type="radio" 
            name="rate" 
            value="i_5_4" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("i_5_4")}
          />5-4.8</label><br />
          <label><input 
            type="radio" 
            name="rate" 
            value="i_4" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("i_4")}
          />4.8-4.5</label>
          <label><input 
            type="radio" 
            name="rate" 
            value="l_4" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("l_4")}
          />&lt; 4.5</label>
        </div>
      </div>
    )
  }
}
  
export default FilterFreelancerRate