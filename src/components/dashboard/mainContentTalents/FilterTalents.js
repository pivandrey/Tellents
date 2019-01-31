import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import FilterExperience from '../mainContentJobs/FilterComponents/FilterExperience';
import FilterJobDoneSuccess from './FilterComponents/FilterJobDoneSuccess';
import FilterSkillTestScore from './FilterComponents/FilterSkillTestScore';
import FilterFreelancerRate from './FilterComponents/FilterFreelancerRate';
import FilterLocation from '../mainContentJobs/FilterComponents/FilterLocation';
import FilterLanguage from '../mainContentJobs/FilterComponents/FilterLanguage';
import FilterAvailability from './FilterComponents/FilterAvailability';
import FilterPlaceOfWork from './FilterComponents/FilterPlaceOfWork';

import { clearCountPage } from '../../../actions/pageActions';
import { addFilter, setFilterFromHistory, addFilterFromForm } from '../../../actions/filterJobActions';
import { fetchTalents } from '../../../actions/talentsCardsActions'

import './style/filterTalents.css'

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
        }
      }
    }
  };

  handleClickSubmit = (values) => {
    this.props.clearCountPage();
    this.props.addFilterFromForm(values);
    this.props.fetchTalents();
  }

  changeFilter = (values) => {
    this.props.clearCountPage();
    this.props.addFilter(values);
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
    addFilter,
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