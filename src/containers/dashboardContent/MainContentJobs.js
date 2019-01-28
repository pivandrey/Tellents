import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilterJobs from '../../components/dashboard/mainContentJobs/FilterJobs'
import ListOfJobs from '../../components/dashboard/mainContentJobs/ListOfJobs'

class MainContentJobs extends Component {

  render() {
    const { jobs } = this.props;
    return(
      <div className="main-content">
        <FilterJobs />
        <ListOfJobs data={jobs}/>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    jobs: store.jobs.jobs,
  }
};

export default connect(
  mapStateToProps,
)(MainContentJobs);