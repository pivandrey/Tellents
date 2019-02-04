import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/filterTalents.css';

class FilterSkillTestScore extends Component {

  setCheckForInput = (value) => {
    const filters = this.props.filter;
    if (filters.indexOf(value) >= 0) {
      return true;
    };
  };

  render() {
    return(
      <div>
        <p>Skill Test Score:</p>
        <div className="filter-checkbox">
          <label><input 
            type="radio" 
            name="skill" 
            value="i_5" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("i_5")}
          />Best (5)</label>
          <label><input 
            type="radio" 
            name="skill" 
            value="i_5_4" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("i_5_4")}
          />5-4.6</label><br />
          <label><input 
            type="radio" 
            name="skill" 
            value="i_4" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("i_4")}
          />4.6-4</label>
          <label><input 
            type="radio" 
            name="skill" 
            value="l_4" 
            onClick={this.props.handleClick} 
            defaultChecked={this.setCheckForInput("l_4")}
          />&lt; 4</label>
        </div>
      </div>
    )
  };
};

FilterSkillTestScore.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
  
export default FilterSkillTestScore;