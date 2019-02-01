import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/filterJobs.css';

class FilterBudget extends Component {

  state = {
    showOptionalFilter: false,
  };

  setCheckForInput = (value) => {
    const filters = this.props.filter;
      if (filters.indexOf(value) >= 0) {
        return true;
      }
  };

  setValueForButton = () => {
    const filters = this.props.filter;
      if (filters) {
        return filters;
      } else return "Select budget"
  };

  showOptionalFilter = () => {
    this.setState ({
      showOptionalFilter: !this.state.showOptionalFilter,
    })
  };

  render() {
    return(
      <div>
        <p>Budget:</p>
        <button className="filter-show-optional" onClick={this.showOptionalFilter}>
          <span>{this.setValueForButton()}</span>
        </button>
        {this.state.showOptionalFilter && <div className="filter-optional">
          <label><input 
            type="radio" 
            name="bud" 
            value="i0_100" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("i0_100")}
          />$0 - $100</label>
          <label><input 
            type="radio" 
            name="bud" 
            value="i100_300" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("i100_300")}
          />$100 - $300</label>
          <label><input 
            type="radio" 
            name="bud" 
            value="i300_1000" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("i300_1000")}
          />$300 - $1000</label>
          <label><input 
            type="radio" 
            name="bud" 
            value="more_1000" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("more_1000")}
          />>$1000</label>
          <label><input 
            type="radio" 
            name="bud" 
            value="undefined" 
            onClick={this.props.handleClick} 
            checked={this.setCheckForInput("undefined")}
          />Not defined (Empty)</label>
        </div>}
      </div>
    )
  };
};

FilterBudget.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
  
export default FilterBudget;