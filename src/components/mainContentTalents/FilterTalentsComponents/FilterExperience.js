import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/filterTalents.css';

class FilterExperience extends Component {

  defaultValue = (value) => {
    const filters = this.props.filter;
    if (filters.indexOf(value) >= 0) {
      return true;
    }
  }

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
            defaultChecked={this.defaultValue("intern")}
          />Intern</label>
          <label><input 
            type="checkbox" 
            name="exp" 
            value="junior" 
            onClick={this.props.handleClick} 
            defaultChecked={this.defaultValue("junior")}
          />Junior</label><br />
          <label><input 
            type="checkbox" 
            name="exp" 
            value="senior" 
            onClick={this.props.handleClick} 
            defaultChecked={this.defaultValue("senior")}
          />Senior</label>
          <label><input 
            type="checkbox" 
            name="exp" 
            value="expert" 
            onClick={this.props.handleClick} 
            defaultChecked={this.defaultValue("expert")}
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