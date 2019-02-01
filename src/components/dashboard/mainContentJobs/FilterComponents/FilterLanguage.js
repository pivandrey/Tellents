import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/filterJobs.css';

class FilterLanguage extends Component {

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
    const languages = this.props.languages;
    return(
      <div>
        <p>Language:</p>
        <button className="filter-show-optional" onClick={this.showOptionalFilter}>
          <span>Languages(All)</span>
        </button>
        {this.state.showOptionalFilter &&
        <div className="filter-optional filter-language">
          {
            languages.map((language) => (
              <label key={"labelLanguage" + language.language_id}><input
                key={"language" + language.language_id}
                type="checkbox" 
                name="lang" 
                value={language.name}
                onClick={this.props.handleClick} 
                checked={this.setCheckForInput(language.name)}
              />{language.name}</label>
            ))
          }
        </div>}
      </div>
    )
  };
};

FilterLanguage.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
};
  
export default FilterLanguage;