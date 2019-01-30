import React, { Component } from 'react'

import '../style/filterJobs.css'

class FilterLanguage extends Component {
  render() {
    return(
      <div>
        <p>Languages:</p>
        <label><select name="lang">
          <option>Any lang</option>
        </select></label>
      </div>
    )
  }
}
  
export default FilterLanguage