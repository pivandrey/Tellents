import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/filterJobs.css';

class FilterProposals extends Component {

  setCheckForInput = (value) => {
    const filters = this.props.filter;
      if (filters.indexOf(value) >= 0) {
        return true;
      }
  };

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
            checked={this.setCheckForInput("i0_5")}
          />0 - 5</label>
          <label><input 
            type="radio" 
            name="prop" 
            value="i5_10" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("i5_10")}
          />5 - 10</label><br />
          <label><input 
            type="radio" 
            name="prop" 
            value="i10_20" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("i10_20")}
          />10 - 20</label>
          <label><input 
            type="radio" 
            name="prop" 
            value="m_20" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("m_20")}
          />> 20</label><br />
          <label><input 
            type="radio" 
            name="prop" 
            value="undefined" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("undefined")}
          />None</label>
        </div>
      </div>
    )
  };
};

FilterProposals.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
  
export default FilterProposals;