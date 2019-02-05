import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './dashboardContentStyle.css';
import SortComponentJobs from './SortComponentJobs';
import SortComponentTalents from './SortComponentTalents';

class JobBoxesHeader extends Component {

  handleClickSort = (e) => {
    const value = e.target.value;
    this.props.clearCountPage();
    this.props.sort(value);
    this.props.fetchCards();
  };

  defineJobsOrTalentsFlag = () => {
    return this.props.defineJobsOrTalents();
  };

  render() {
    return(
      <div className="jobBoxes">
        <div className="jobBoxes-radio">
          <Link 
            to='/dashboard/find/job' 
            className={this.defineJobsOrTalentsFlag() ? 
              "jobBoxes-header-jobs jobBoxes-header-active" : "jobBoxes-header-jobs"}
          > 
            <label>
              Jobs
                <input type="radio" name="jobBoxesFilter" value="0" className="radio-block" />
            </label>
          </Link>
          <Link to={this.defineJobsOrTalentsFlag() ? '/dashboard/find/talent' : '/dashboard/find/job'}>
            <button className="radio-switcher">
              <div className={this.defineJobsOrTalentsFlag() ? "circul-shape" : "circul-shape-right"}>
                <span className="icon icon-check-mark"></span>
              </div>
            </button>
          </Link>
          <Link 
            to='/dashboard/find/talent'
            className={!this.defineJobsOrTalentsFlag() ? 
              "jobBoxes-header-talents jobBoxes-header-active" : "jobBoxes-header-talents"}
          > 
            <label>
              Talents
              <input type="radio" name="jobBoxesFilter" value="0" className="radio-block" />
            </label>
          </Link>
        </div>
          {this.defineJobsOrTalentsFlag() && <SortComponentJobs
            handleClickSort={this.handleClickSort}
            cardsCount={this.props.cardsCount}
          />}
          {!this.defineJobsOrTalentsFlag() && <SortComponentTalents 
            handleClickSort={this.handleClickSort}
            cardsCount={this.props.cardsCount}
          />}
      </div>
    )
  };
};

JobBoxesHeader.propTypes = {
  sort: PropTypes.func.isRequired, 
  fetchCards: PropTypes.func.isRequired,
  clearCountPage: PropTypes.func.isRequired,
  cardsCount: PropTypes.func.isRequired,
  defineJobsOrTalents: PropTypes.func.isRequired,
};

export default JobBoxesHeader;