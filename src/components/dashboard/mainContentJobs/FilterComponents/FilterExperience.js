import React, { Component } from 'react'

import '../style/filterJobs.css'

class FilterExperience extends Component {
  render() {
    return(
      <div>
        <p>Experience: </p>
        <div className="filter-checkbox">
          <label><input 
            type="checkbox" 
            name="exp" 
            value="intern" 
            onClick={this.props.handleClick} 
          />Intern</label>
          <label><input 
            type="checkbox" 
            name="exp" 
            value="junior" 
            onClick={this.props.handleClick} 
          />Junior</label><br />
          <label><input 
            type="checkbox" 
            name="exp" 
            value="senior" 
            onClick={this.props.handleClick} 
          />Senior</label>
          <label><input 
            type="checkbox" 
            name="exp" 
            value="expert" 
            onClick={this.props.handleClick} 
          />Expert</label>
        </div>
      </div>
    )
  }
}

export default FilterExperience