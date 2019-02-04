import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../filterTalents.css';

class FilterJobDoneSuccess extends Component {

  setCheckForInput = (value) => {
    const filters = this.props.filter;
    if (filters.indexOf(value) >= 0) {
      return true;
    };
  };

  render() {
    return(
      <div>
        <p>Job Done Success:</p>
        <div className="filter-checkbox">
          <label><input 
            type="radio" 
            name="ds" 
            value="i_100" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("i_100")}
          />100%</label>
          <label><input 
            type="radio" 
            name="ds" 
            value="m_95" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("m_95")}
          />> 95%</label><br />
          <label><input 
            type="radio" 
            name="ds" 
            value="i_85_95" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("i_85_95")}
          />85-95%</label>
          <label><input 
            type="radio" 
            name="ds" 
            value="l_85" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("l_85")}
          />&lt; 85%</label>
        </div>
      </div>
    )
  };
};

FilterJobDoneSuccess.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
  
export default FilterJobDoneSuccess;