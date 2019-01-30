import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import MainContentJobs from '../../../containers/dashboardContent/MainContentJobs'
import MainContentTalents from '../../../containers/dashboardContent/MainContentTalents'
import JobBoxesHeader from './JobBoxesHeader'
import ContentHeader from './ContentHeader'
import AddJobModal from '../../../containers/AddJobModal';

import './dashboardContentStyle.css'

class Content extends Component {

  render() {
    const { fullName } = this.props;
    const jobModal = this.props.jobModal;
    return(
      <div className="dashboard-content">
        <ContentHeader 
          fullName={fullName} 
          setSearchRequest={this.props.setSearchRequest}
          fetchJobs={this.props.fetchJobs}
          clearCountPage={this.props.clearCountPage}
        />
        <JobBoxesHeader sort={this.props.sort} fetchJobs={this.props.fetchJobs} clearCountPage={this.props.clearCountPage} />
        <div className="dashboard-main-content">
          <Switch>
            <Route path="/dashboard/find/job" component={MainContentJobs} />
            <Route path="/dashboard/find/talent" component={MainContentTalents} />
          </Switch>
          <button 
            className="btn-add-jobs"
            onClick={this.props.showModal}
          >Start New Project</button>
          {jobModal &&
          <AddJobModal />}
        </div>
      </div>
    )
  }
}

export default Content