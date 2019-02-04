import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import FilterAvailability from './components/FilterAvailability';
import FilterBudget from './components/FilterBudget';
import FilterExperience from './components/FilterExperience';
import FilterJobDelivery from './components/FilterJobDelivery';
import FilterLanguage from './components/FilterLanguage';
import FilterLocation from './components/FilterLocation';
import FilterPayment from './components/FilterPayment';
import FilterPlace from './components/FilterPlace';
import FilterPosted from './components/FilterPosted';
import FilterProposals from './components/FilterProposals';

import { fetchJobs } from '../../actions/jobsCardsActions';
import { addJobFilter, setFilterFromHistory, addFilterFromForm } from '../../actions/filterJobActions';
import { clearCountPage } from '../../actions/pageActions';

import './filterJobs.css';


class FilterJobs extends Component {

  handleClick = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.changeFilter({ [name]: value });

     const filters = this.props.filter;
    if (e.target.type === "radio") {
      for (let filter in filters) {
        if (filter === e.target.name && filters[filter] === e.target.value) {
          e.target.checked = false;
        }
      }
    }; 
  };

  handleClickSubmit = (values) => {
    this.props.clearCountPage();
    this.props.addFilterFromForm(values);
    this.props.fetchJobs();
  };

  changeFilter = (values) => {
    this.props.clearCountPage();
    this.props.addJobFilter(values);
    this.props.fetchJobs();
  };

  componentDidMount () {
    const historyOption = this.props.history.location.search;
    this.props.setFilterFromHistory(queryString.parse(historyOption));
  };

  render() {
    const filter = this.props.filter;
    return(
      <div className="filter1">
        <FilterExperience handleClick={this.handleClick} filter={filter.exp} />
        <FilterPosted handleClick={this.handleClick} filter={filter.post} />
        <FilterPlace />
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
        <FilterAvailability handleClick={this.handleClick} filter={filter.avl} />
        <FilterPayment 
          handleClick={this.handleClick} 
          filter={filter.payment} 
          filterPriceFrom={filter.p_from}
          filterPriceTo={filter.p_to}
          handleClickSubmit={this.handleClickSubmit}
        />
        <FilterBudget handleClick={this.handleClick} filter={filter.bud} />
        <FilterProposals handleClick={this.handleClick} filter={filter.prop} />
        <FilterJobDelivery />
      </div>
    )
  };
};

FilterJobs.propTypes = {
  filter: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
}

const mapStateToProps = store => {
  return {
    filter: store.filterJob,
    languages: store.languages.languages,
    countries: store.countries.countries,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchJobs,
    addJobFilter,
    setFilterFromHistory,
    addFilterFromForm,
    clearCountPage,
  },
  dispatch
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps, 
)(FilterJobs));