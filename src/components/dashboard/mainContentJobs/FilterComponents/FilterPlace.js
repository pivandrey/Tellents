import React, { Component } from 'react'

import '../style/filterJobs.css'

class FilterPlace extends Component {
  render() {
    return(
      <div>
        <p>Place:</p>
        <div className="filter-checkbox">
          <label><input 
            type="checkbox" 
            name="place" 
            value="0" 
          />On-line</label>
          <label><input 
            type="checkbox" 
            name="place" 
            value="1" 
          />On-site</label>
        </div>
      </div>
    )
  }
}
  
export default FilterPlace