import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import FilterExperience from '../components/mainContentTalents/FilterTalentsComponents/FilterExperience';
import FilterJobDoneSuccess from '../components/mainContentTalents/FilterTalentsComponents/FilterJobDoneSuccess';
import FilterSkillTestScore from '../components/mainContentTalents/FilterTalentsComponents/FilterSkillTestScore';
import FilterFreelancerRate from '../components/mainContentTalents/FilterTalentsComponents/FilterFreelancerRate';
import FilterLocation from '../components/mainContentTalents/FilterTalentsComponents/FilterLocation';
import FilterLanguage from '../components/mainContentTalents/FilterTalentsComponents/FilterLanguage';
import FilterAvailability from '../components/mainContentTalents/FilterTalentsComponents/FilterAvailability';
import FilterPlaceOfWork from '../components/mainContentTalents/FilterTalentsComponents/FilterPlaceOfWork';

import { clearCountPage } from '../actions/pageActions';
import { setFilterFromHistory, addFilterFromForm } from '../actions/filterJobActions';
import { addTalentsFilter } from '../actions/filterTalentsActions';
import { fetchTalents } from '../actions/talentsCardsActions';

import '../components/mainContentTalents/style/filterTalents.css';

class FilterTalents extends Component {

  handleClick = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.changeFilter({ [name]: value });

    const filters = this.props.filter;
    if (e.target.type === "radio") {
      for (let filter in filters) {
        if (filter === e.target.name && filters[filter] === e.target.value) {
          e.target.checked = false
        };
      };
    };
  };

  handleClickSubmit = (values) => {
    this.props.clearCountPage();
    this.props.addFilterFromForm(values);
    this.props.fetchTalents();
  };

  changeFilter = (values) => {
    this.props.clearCountPage();
    this.props.addTalentsFilter(values);
    this.props.fetchTalents();
  };

  componentDidMount () {
    const historyOption = this.props.history.location.search;
    this.props.setFilterFromHistory(queryString.parse(historyOption));
  };

  render() {
    const filter = this.props.filter;
    return(
      <div className="filter1">
        <FilterExperience 
          handleClick={this.handleClick} 
          filter={filter.exp}
        />
        <FilterJobDoneSuccess 
          handleClick={this.handleClick} 
          filter={filter.ds}
        />
        <FilterSkillTestScore 
          handleClick={this.handleClick} 
          filter={filter.skill}
        />
        <FilterFreelancerRate 
          handleClick={this.handleClick} 
          filter={filter.rate}
        />
        <FilterLocation 
          handleClick={this.handleClick} 
          filter={filter.loc}
          countries={this.props.countries}
        />
        <FilterLanguage 
          handleClick={this.handleClick} 
          filter={filter.lang}
          languages={this.props.languages}
        />
        <FilterAvailability 
          handleClick={this.handleClick} 
          filter={filter.avl}
        />
        <FilterPlaceOfWork 
          handleClick={this.handleClick} 
          filter={filter.place}
        />
      </div>
    )
  }
}

FilterTalents.propTypes = {
  filter: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
}

const mapStateToProps = store => {
  return {
    filter: store.filterTalents,
    languages: store.languages.languages,
    countries: store.countries.countries,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchTalents,
    addTalentsFilter,
    setFilterFromHistory,
    addFilterFromForm,
    clearCountPage,
  },
  dispatch
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps, 
)(FilterTalents));