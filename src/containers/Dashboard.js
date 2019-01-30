import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/dashboard/DashboardHeader'
import Content from '../components/dashboard/content/Content'

import { showModalAddJob } from '../actions/addJobActions'
import { fetchCountries } from '../actions/countriesActions'
import { fetchLanguages } from '../actions/languageActions'
import { setSearchRequest } from '../actions/searchActions'
import { fetchJobs } from '../actions/jobsCardsActions'
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

  render() {
    const jobModal = this.props.addJobModal;
    const { showModalAddJob } = this.props;
    return(
      <div className="dashboard">
        <Header fullName={this.fullName} />
        <Content 
          fullName={this.fullName} 
          jobModal={jobModal}
          showModal={showModalAddJob}
          setSearchRequest={this.props.setSearchRequest}
          fetchJobs={this.props.fetchJobs}
          sort={this.props.sort}
          clearCountPage={this.props.clearCountPage}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    firstName: store.authUser.firstName,
    lastName: store.authUser.lastName,
    addJobModal: store.addJobModal.showModalAddJob,
    token: store.authUser.token,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    showModalAddJob,
    fetchCountries,
    fetchLanguages,
    setSearchRequest,
    fetchJobs,
    sort,
    clearCountPage,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
)(Dashboard);