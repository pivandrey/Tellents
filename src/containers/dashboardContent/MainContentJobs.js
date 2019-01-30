import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import FilterJobs from '../../components/dashboard/mainContentJobs/FilterJobs'
import ListOfJobs from '../../components/dashboard/mainContentJobs/ListOfJobs'

import { fetchJobs } from '../../actions/jobsCardsActions'
import { setPage, clearCountPage } from '../../actions/pageActions'

class MainContentJobs extends Component {

  componentDidMount() {
    this.props.clearCountPage();
    this.props.fetchJobs()
  }

  render() {
    const { jobs } = this.props;
    return(
      <div className="main-content">
        <FilterJobs />
        <ListOfJobs data={jobs} setPage={this.props.setPage} fetchJobs={this.props.fetchJobs} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    jobs: store.jobs.jobs,
    filter: store.filterJob,
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