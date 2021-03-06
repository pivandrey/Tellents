import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from "j-toker";

import DashboardHeader from '../components/DashboardHeader'
import Content from '../components/Content'

import { showModalAddJob } from '../actions/addJobActions'
import { fetchCountries } from '../actions/countriesActions'
import { fetchLanguages } from '../actions/languageActions'
import { setSearchRequest } from '../actions/searchActions'
import { fetchJobs } from '../actions/jobsCardsActions'
import { fetchTalents } from '../actions/talentsCardsActions'
import { sort } from '../actions/sortActions'
import { clearCountPage } from '../actions/pageActions'
import { setDataAboutUser } from "../actions/authUserActions";

import '../components/dashboardStyle.css'

class Dashboard extends Component {

  fullName = () => {
    const { firstName, lastName } = this.props;
    const fullName = '' + firstName + ' ' + lastName;
    return fullName;
  };

  async componentDidMount() {
    const user = await Auth.validateToken();
    this.props.setDataAboutUser(user);
    this.props.fetchCountries();
    this.props.fetchLanguages();
  };

  defineJobsOrTalents = () => {
    let path = this.props.history.location.pathname;
    if (path.indexOf("job") > 0) {
      return true;
    } else {
      return false;
    }
  };

  countOfCards = () => {
    if (this.defineJobsOrTalents()) {
      return this.props.jobsCount;
    } else {
      return this.props.talentsCount;
    }
  };

  fetchCards = () => {
    if (this.defineJobsOrTalents()) {
      return this.props.fetchJobs();
    } else {
      return this.props.fetchTalents();
    }
  };

  render() {
    const jobModalFlag = this.props.addJobModalFlag;
    const { showModalAddJob } = this.props;
    return(
      <div className="dashboard">
        <DashboardHeader fullName={this.fullName} />
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
          isShowTerms={this.props.isShowTerms}
        />
      </div>
    )
  };
};

Dashboard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  addJobModalFlag: PropTypes.bool.isRequired,
  jobsCount: PropTypes.number.isRequired,
  talentsCount: PropTypes.number.isRequired,
  isShowTerms: PropTypes.bool.isRequired,
};

const mapStateToProps = store => {
  return {
    firstName: store.authUser.firstName,
    lastName: store.authUser.lastName,
    addJobModalFlag: store.addJobModal.showModalAddJob,
    jobsCount: Number(store.jobs.countJobs),
    talentsCount: Number(store.talents.countTalents),
    isShowTerms: store.terms.showTerms,
  };
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
    setDataAboutUser,
  },
  dispatch
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps, 
)(Dashboard));