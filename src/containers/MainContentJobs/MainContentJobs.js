import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import FilterJobs from '../FilterJobs';
import ListOfJobs from './components/ListOfJobs';

import { fetchJobs } from '../../actions/jobsCardsActions';
import { setPage, clearCountPage } from '../../actions/pageActions';

import '../mainContent.css';

class MainContentJobs extends Component {

  componentDidMount() {
    this.props.clearCountPage();
    this.props.fetchJobs();
  };

  render() {
    const { jobs } = this.props;
    const jobPostedSuccess = this.props.jobPostedSuccess;
    return(
      <div className="main-content">
        <FilterJobs />
        <div className="main-content-block">
          {jobPostedSuccess &&
            <div className="job_posted">
              <h2>Job was posted!</h2>
            </div>
          }
          <ListOfJobs 
            data={jobs} 
            setPage={this.props.setPage} 
            fetchJobs={this.props.fetchJobs} 
          />
        </div>
      </div>
    )
  };
};

MainContentJobs.propTypes = {
  jobs: PropTypes.array.isRequired,
  filter: PropTypes.object.isRequired,
  jobPostedSuccess: PropTypes.string.isRequired,
};

const mapStateToProps = store => {
  return {
    jobs: store.jobs.jobs,
    filter: store.filterJob,
    jobPostedSuccess: store.addJobModal.jobPostedSuccess,
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