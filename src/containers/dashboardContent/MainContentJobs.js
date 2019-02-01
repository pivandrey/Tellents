import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from "reselect";
import PropTypes from 'prop-types';

import FilterJobs from '../../components/dashboard/mainContentJobs/FilterJobs';
import ListOfJobs from '../../components/dashboard/mainContentJobs/ListOfJobs';

import { fetchJobs } from '../../actions/jobsCardsActions';
import { setPage, clearCountPage } from '../../actions/pageActions';

class MainContentJobs extends Component {

  componentDidMount() {
    this.props.clearCountPage();
    this.props.fetchJobs();
  };

  render() {
    const { jobs } = this.props;
    return(
      <div className="main-content">
        <FilterJobs />
        <ListOfJobs 
          data={jobs} 
          setPage={this.props.setPage} 
          fetchJobs={this.props.fetchJobs} 
        />
      </div>
    )
  };
};

MainContentJobs.propTypes = {
  jobs: PropTypes.array.isRequired,
  filter: PropTypes.object.isRequired,
};

const getJobs = state => state.jobs.jobs;
const getFilters = state => state.filterJob;

const getJobsSelector = createSelector(
  [getJobs], (jobs) => {
    return jobs
  }
);

const getFiltersSelector = createSelector(
  [getFilters], (filters) => {
    return filters
  }
);

const mapStateToProps = state => {
  return {
    jobs: getJobsSelector(state),
    filter: getFiltersSelector(state),
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchJobs,
    setPage,
    clearCountPage,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
)(MainContentJobs);