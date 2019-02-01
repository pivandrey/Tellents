import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/filterJobs.css';

class FilterAvailability extends Component {

  setCheckForInput = (value) => {
    const filters = this.props.filter;
      if (filters.indexOf(value) >= 0) {
        return true;
      }
  };

  render() {
    return(
      <div>
        <p>Availability:</p>
        <div className="filter-checkbox">
          <label><input 
            type="checkbox" 
            name="avl" 
            value="per_week_10" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("per_week_10")}
          />&lt; 20h</label>
          <label><input 
            type="checkbox" 
            name="avl" 
            value="per_week_up_to_30" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("per_week_up_to_30")}
          />> 20h</label><br />
          <label><input 
            type="checkbox" 
            name="avl" 
            value="per_week_more_than_30" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("per_week_more_than_30")}
          />Full-Time</label>
          <label><input 
            type="checkbox" 
            name="avl" 
            value="decide_later" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("decide_later")}
          />Undefined</label>
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