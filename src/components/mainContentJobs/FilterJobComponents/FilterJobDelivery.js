import React, { Component } from 'react'

import '../style/filterJobs.css'

class FilterJobDelivery extends Component {
  render() {
    return(
      <div>
        <p>Job Delivery:</p>
        <div className="filter-checkbox">
          <label><input type="checkbox" name="delivery" value="0" />Not defined</label>
          <label><input type="checkbox" name="delivery" value="1" />Less 1W</label>
        </div>
      </div>
    )
  }
}
  
export default FilterJobDelivery