import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import MainContentJobs from '../containers/MainContentJobs';
import MainContentTalents from '../containers/MainContentTalents';
import JobBoxesHeader from './JobBoxesHeader';
import ContentHeader from './ContentHeader';
import AddJobModal from '../containers/AddJobModal';
import TermsUse from '../containers/TermsUse';

import './dashboardContentStyle.css';

class Content extends Component {

  render() {
    const { fullName } = this.props;
    const jobModalFlag = this.props.jobModalFlag;
    return(
      <div className="dashboard-content">
        <ContentHeader 
          fullName={fullName} 
          setSearchRequest={this.props.setSearchRequest}
          fetchCards={this.props.fetchCards}
          clearCountPage={this.props.clearCountPage}
          defineJobsOrTalents={this.props.defineJobsOrTalents}
        />
        <JobBoxesHeader 
          sort={this.props.sort} 
          fetchCards={this.props.fetchCards} 
          clearCountPage={this.props.clearCountPage}
          cardsCount={this.props.cardsCount}
          defineJobsOrTalents={this.props.defineJobsOrTalents}
        />
        <div className="dashboard-main-content">
          <Switch>
            <Route path="/dashboard/find/job" component={MainContentJobs} />
            <Route path="/dashboard/find/talent" component={MainContentTalents} />
          </Switch>
          <button 
            className="btn-add-jobs"
            onClick={this.props.showModal}
          >Start New Project</button>
          {jobModalFlag &&
          <AddJobModal />}
          
          {this.props.isShowTerms &&
            <TermsUse />
          }
        </div>
      </div>
    )
  };
};

Content.propTypes = {
  fullName: PropTypes.func.isRequired,
  jobModalFlag: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  setSearchRequest: PropTypes.func.isRequired,
  fetchCards: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
  clearCountPage: PropTypes.func.isRequired,
  cardsCount: PropTypes.func.isRequired,
  defineJobsOrTalents: PropTypes.func.isRequired,
  isShowTerms: PropTypes.bool.isRequired,
};

export default Content;