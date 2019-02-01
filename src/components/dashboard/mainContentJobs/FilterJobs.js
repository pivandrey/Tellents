import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import FilterAvailability from './FilterComponents/FilterAvailability';
import FilterBudget from './FilterComponents/FilterBudget';
import FilterExperience from './FilterComponents/FilterExperience';
import FilterJobDelivery from './FilterComponents/FilterJobDelivery';
import FilterLanguage from './FilterComponents/FilterLanguage';
import FilterLocation from './FilterComponents/FilterLocation';
import FilterPayment from './FilterComponents/FilterPayment';
import FilterPlace from './FilterComponents/FilterPlace';
import FilterPosted from './FilterComponents/FilterPosted';
import FilterProposals from './FilterComponents/FilterProposals';

import { fetchJobs } from '../../../actions/jobsCardsActions';
import { addFilter, setFilterFromHistory, addFilterFromForm } from '../../../actions/filterJobActions';
import { clearCountPage } from '../../../actions/pageActions';

import './style/filterJobs.css';


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
    this.props.addFilter(values);
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
)(FilterJobs));