import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import FilterTalents from '../FilterTalents';
import ListOfTalents from './components/ListOfTalents';

import { fetchTalents } from '../../actions/talentsCardsActions';
import { setPage, clearCountPage } from '../../actions/pageActions';

import '../mainContent.css';

class MainContentTalents extends Component {

  componentDidMount() {
    this.props.clearCountPage();
    this.props.fetchTalents()
  };

  render() {
    const { talents } = this.props;
    const jobPostedSuccess = this.props.jobPostedSuccess;
    return(
      <div className="main-content">
        <FilterTalents />
        <div className="main-content-block">
          {jobPostedSuccess &&
            <div className="job_posted">
              <h2>Job was posted!</h2>
            </div>
          }
          <ListOfTalents 
            data={talents}
            setPage={this.props.setPage} 
            fetchTalents={this.props.fetchTalents} 
            jobPostedSuccess={this.props.jobPostedSuccess}
          />
        </div>
      </div>
    )
  };
};

MainContentTalents.propTypes = {
  talents: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  jobPostedSuccess: PropTypes.string.isRequired,
}

const mapStateToProps = store => {
  return {
    talents: store.talents.talents,
    filters: store.filterTalents,
    jobPostedSuccess: store.addJobModal.jobPostedSuccess,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchTalents,
    setPage,
    clearCountPage,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
)(MainContentTalents);