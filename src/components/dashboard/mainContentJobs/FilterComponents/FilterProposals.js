import React, { Component } from 'react'

import '../style/filterJobs.css'

class FilterProposals extends Component {
  render() {
    return(
      <div>
        <p>Proposals:</p>
        <div className="filter-checkbox">
          <label><input 
            type="radio" 
            name="prop" 
            value="i0_5" 
            onClick={this.props.handleClick} 
          />0 - 5</label>
          <label><input 
            type="radio" 
            name="prop" 
            value="i5_10" 
            onClick={this.props.handleClick} 
          />5 - 10</label><br />
          <label><input 
            type="radio" 
            name="prop" 
            value="i10_20" 
            onClick={this.props.handleClick} 
          />10 - 20</label>
          <label><input 
            type="radio" 
            name="prop" 
            value="m_20" 
            onClick={this.props.handleClick} 
          />> 20</label><br />
          <label><input 
            type="radio" 
            name="prop" 
            value="undefined" 
            onClick={this.props.handleClick} 
          />None</label>
        </div>
      </div>
    )
  }
}
  
export default FilterProposals