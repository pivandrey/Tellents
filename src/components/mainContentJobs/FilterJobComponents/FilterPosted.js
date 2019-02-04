import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/filterJobs.css';

class FilterPosted extends Component {

  setCheckForInput = (value) => {
    const filters = this.props.filter;
      if (filters.indexOf(value) >= 0) {
        return true;
      }
  };

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
            defaultChecked={this.setCheckForInput("i24")}
          />24h</label>
          <label><input 
            type="radio" 
            name="post" 
            value="i3d" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("i3d")}
          />3d</label><br />
          <label><input 
            type="radio" 
            name="post" 
            value="i1w" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("i1w")}
          />1w</label>
          <label><input 
            type="radio" 
            name="post" 
            value="m_1w" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("m_1w")}
          />>1w</label>
        </div> 
      </div>
    )
  };
};

FilterPosted.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}
  
export default FilterPosted;