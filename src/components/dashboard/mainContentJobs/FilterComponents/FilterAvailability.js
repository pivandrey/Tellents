import React, { Component } from 'react'

import '../style/filterJobs.css'

class FilterAvailability extends Component {
  render() {
    return(
      <div>
        <p>Availability:</p>
        <div className="filter-checkbox">
          <label><input 
            type="checkbox" 
            name="avl" 
            value="per_week_10" 
            onClick={this.props.handleClick} 
          />&lt; 20h</label>
          <label><input 
            type="checkbox" 
            name="avl" 
            value="per_week_up_to_30" 
            onClick={this.props.handleClick} 
          />> 20h</label><br />
          <label><input 
            type="checkbox" 
            name="avl" 
            value="per_week_more_than_30" 
            onClick={this.props.handleClick} 
          />Full-Time</label>
          <label><input 
            type="checkbox" 
            name="avl" 
            value="decide_later" 
            onClick={this.props.handleClick} 
          />Undefined</label>
        </div>
      </div>
    )
  }
}
  
export default FilterAvailability