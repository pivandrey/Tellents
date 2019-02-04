import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import FilterJobs from './FilterJobs';
import ListOfJobs from '../components/mainContentJobs/ListOfJobs';

import { fetchJobs } from '../actions/jobsCardsActions';
import { setPage, clearCountPage } from '../actions/pageActions';

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