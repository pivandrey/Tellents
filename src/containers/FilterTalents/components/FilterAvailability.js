import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../filterTalents.css';

class FilterAvailability extends Component {

  setCheckForInput = (value) => {
    const filters = this.props.filter;
    if (filters.indexOf(value) >= 0) {
      return true;
    };
  };

  render() {
    return(
      <div>
        <p>Availability:</p>
        <div className="filter-checkbox">
          <label><input 
            type="checkbox" 
            name="avl" 
            value="per_week_up_to_20" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("per_week_up_to_20")}
          />&lt; 20h</label>
          <label><input 
            type="checkbox" 
            name="avl" 
            value="per_week_30" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("per_week_30")}
          />30h</label><br />
          <label><input 
            type="checkbox" 
            name="avl" 
            value="per_week_more_than_30" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("per_week_more_than_30")}
          />> 30h</label>
          <label><input 
            type="checkbox" 
            name="avl" 
            value="per_week_full_time" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("per_week_full_time")}
          />Full Time</label>
        </div>
      </div>
    )
  };
};

FilterAvailability.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
  
export default FilterAvailability;