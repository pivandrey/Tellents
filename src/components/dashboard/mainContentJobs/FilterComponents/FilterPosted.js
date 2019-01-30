import React, { Component } from 'react'

import '../style/filterJobs.css'

class FilterPosted extends Component {
  render() {
    return(
      <div>
        <p>Posted:</p>
        <div className="filter-checkbox">
          <label><input 
            type="radio" 
            name="post" 
            value="i24" 
            onClick={this.props.handleClick} 
          />24h</label>
          <label><input 
            type="radio" 
            name="post" 
            value="i3d" 
            onClick={this.props.handleClick} 
          />3d</label><br />
          <label><input 
            type="radio" 
            name="post" 
            value="i1w" 
            onClick={this.props.handleClick} 
          />1w</label>
          <label><input 
            type="radio" 
            name="post" 
            value="m_1w" 
            onClick={this.props.handleClick} 
          />>1w</label>
        </div> 
      </div>
    )
  }
}
  
export default FilterPosted