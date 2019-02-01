import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/filterJobs.css';

class FilterExperience extends Component {

  setCheckForInput = (value) => {
    const filters = this.props.filter;
      if (filters.indexOf(value) >= 0) {
        return true;
      } else return false
  };

  render() {
    return(
      <div>
        <p>Experience: </p>
        <div className="filter-checkbox">
          <label><input 
            type="checkbox" 
            name="exp" 
            value="intern" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("intern")}
          />Intern</label>
          <label><input 
            type="checkbox" 
            name="exp" 
            value="junior" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("junior")}
          />Junior</label><br />
          <label><input 
            type="checkbox" 
            name="exp" 
            value="senior" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("senior")}
          />Senior</label>
          <label><input 
            type="checkbox" 
            name="exp" 
            value="expert" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("expert")}
          />Expert</label>
        </div>
      </div>
    )
  };
};

FilterExperience.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default FilterExperience;