import React, { Component } from 'react'

import '../style/filterTalents.css'

class FilterPlaceOfWork extends Component {

  setCheckForInput = (value) => {
    const filters = this.props.filter;
      if (filters.indexOf(value) >= 0) {
        return true;
      }
  }

  render() {
    return(
      <div>
        <p>Place of Work:</p>
        <div className="filter-checkbox">
          <label><input 
            type="checkbox" 
            name="place" 
            value="online" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("online")}
          />On-Line</label>
          <label><input 
            type="checkbox" 
            name="place" 
            value="onsite" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("onsite")}
          />On-Site</label><br />
        </div>
      </div>
    )
  }
}
  
export default FilterPlaceOfWork