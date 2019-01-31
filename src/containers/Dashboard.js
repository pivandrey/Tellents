import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Header from '../components/dashboard/DashboardHeader'
import Content from '../components/dashboard/content/Content'

import { showModalAddJob } from '../actions/addJobActions'
import { fetchCountries } from '../actions/countriesActions'
import { fetchLanguages } from '../actions/languageActions'
import { setSearchRequest } from '../actions/searchActions'
import { fetchJobs } from '../actions/jobsCardsActions'
import { fetchTalents } from '../actions/talentsCardsActions'
import { sort } from '../actions/sortActions'
import { clearCountPage } from '../actions/pageActions'

import '../components/dashboard/dashboardStyle.css'

class Dashboard extends Component {

  fullName = () => {
    const { firstName, lastName } = this.props;
    const fullName = '' + firstName + ' ' + lastName
    return fullName
  }

  componentDidMount() {
    this.props.fetchCountries();
    this.props.fetchLanguages();
  }

  defineJobsOrTalents = () => {
    let path = this.props.history.location.pathname;
    if (path.indexOf("job") > 0) return true
    else return false
  }

  countOfCards = () => {
    if (this.defineJobsOrTalents()) return this.props.jobsCount
    else return this.props.talentsCount
  }

  fetchCards = () => {
    if (this.defineJobsOrTalents()) return this.props.fetchJobs()
    else return this.props.fetchTalents()
  }

  render() {
    const jobModalFlag = this.props.addJobModalFlag;
    const { showModalAddJob } = this.props;
    return(
      <div className="dashboard">
        <Header fullName={this.fullName} />
        <Content 
          fullName={this.fullName} 
          jobModalFlag={jobModalFlag}
          showModal={showModalAddJob}
          setSearchRequest={this.props.setSearchRequest}
          fetchCards={this.fetchCards}
          sort={this.props.sort}
          clearCountPage={this.props.clearCountPage}
          cardsCount={this.countOfCards}
          defineJobsOrTalents={this.defineJobsOrTalents}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    firstName: store.authUser.firstName,
    lastName: store.authUser.lastName,
    addJobModalFlag: store.addJobModal.showModalAddJob,
    token: store.authUser.token,
    jobsCount: store.jobs.countJobs,
    talentsCount: store.talents.countTalents,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    showModalAddJob,
    fetchCountries,
    fetchLanguages,
    setSearchRequest,
    fetchJobs,
    fetchTalents,
    sort,
    clearCountPage,
  },
  dispatch
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps, 
)(Dashboard));