import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../filterJobs.css';

class FilterLocation extends Component {

  state = {
    showOptionalFilter: false,
  };

  setCheckForInput = (value) => {
    const filters = this.props.filter;
      if (filters.indexOf(value) >= 0) {
        return true;
      }
  };

  showOptionalFilter = () => {
    this.setState ({
      showOptionalFilter: !this.state.showOptionalFilter,
    })
  };
  
  render() {
    const countries = this.props.countries;
    return(
      <div>
        <p>Location:</p>
        <button className="filter-show-optional" onClick={this.showOptionalFilter}>
          <span>Country(All)</span>
        </button>
        {this.state.showOptionalFilter &&
        <div className="filter-optional filter-language">
          {
            countries.map((country) => (
              <label key={"labelCountry" + country.id}><input
                key={"country" + country.id}
                type="checkbox" 
                name="lang" 
                value={country.name}
                onClick={this.props.handleClick} 
                defaultChecked={this.setCheckForInput(country.name)}
              />{country.name}</label>
            ))
          }
        </div>}
      </div>
    )
  };
};

FilterLocation.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  countries: PropTypes.array.isRequired,
};
  
export default FilterLocation;