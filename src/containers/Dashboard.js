import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/dashboard/DashboardHeader'
import Content from '../components/dashboard/content/Content'

import { showModalAddJob } from '../actions/addJobActions'

import '../components/dashboard/dashboardStyle.css'

class Dashboard extends Component {

  fullName = () => {
    const { firstName, lastName } = this.props;
    const fullName = '' + firstName + ' ' + lastName
    return fullName
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
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    showModalAddJob
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);