import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import history from '../../../history'
import { withRouter } from 'react-router-dom';

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

import { fetchJobs } from '../../../actions/jobsCardsActions'
import { addFilter, setFilter } from '../../../actions/filterJobActions'

import './style/filterJobs.css'

class FilterJobs extends Component {

  handleClick = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.changeFilter({ [name]: value })
  }

  changeFilter = (values) => {
    this.props.addFilter(values);
    this.props.fetchJobs(this.props.filter)
  }

  componentDidMount () {
    const historyOption = this.props.history.location.search;
    const decodingOption = historyOption.slice(1).split('&').map( (filter) => {
      const decodingObject = filter.split('=');
      const key = decodingObject[0];
      let value = '';
      if (decodingObject[1]) {
        value = decodingObject[1].replace("%2C", ",");
      }
      return { [key]: value }
    })
    this.props.setFilter(decodingOption);
  }

  render() {
    return(
      <div className="filter1">
        <FilterExperience handleClick={this.handleClick} />
        <FilterPosted handleClick={this.handleClick} />
        <FilterPlace />
        <FilterLocation handleClick={this.handleClick} />
        <FilterLanguage handleClick={this.handleClick} />
        <FilterAvailability handleClick={this.handleClick} />
        <FilterPayment handleClick={this.handleClick} />
        <FilterBudget handleClick={this.handleClick} />
        <FilterProposals handleClick={this.handleClick} />
        <FilterJobDelivery />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    filter: store.filterJob,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchJobs,
    addFilter,
    setFilter,
  },
  dispatch
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps, 
)(FilterJobs));