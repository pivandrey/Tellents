import React, { Component } from 'react'

import '../style/filterJobs.css'

class FilterLocation extends Component {
  render() {
    return(
      <div>
        <p>Location:</p>
        <label><select name="loc">
          <option>Any location</option>
        </select></label>
      </div>
    )
  }
}
  
export default FilterLocation