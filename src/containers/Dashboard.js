import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/dashboard/DashboardHeader'
import Content from '../components/dashboard/content/Content'

import { showModalAddJob } from '../actions/addJobActions'
import { fetchCountries } from '../actions/countriesActions'
import { fetchLanguages } from '../actions/languageActions'

import '../components/dashboard/dashboardStyle.css'

class Dashboard extends Component {

  fullName = () => {
    const { firstName, lastName } = this.props;
    const fullName = '' + firstName + ' ' + lastName
    return fullName
  }

  getData = () => {
    this.props.fetchCountries()
    this.props.fetchLanguages()
    this.props.fetchJobs()
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
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
)(Dashboard);