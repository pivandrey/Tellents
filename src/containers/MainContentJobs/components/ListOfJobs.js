import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Job from './Job';

import notAnyJob from '../../../img/notAnyJob.png';

import './style/listOfJobsStyle.css';

class ListOfJobs extends Component {

  handleClickBtn = () => {
    this.props.setPage();
    this.props.fetchJobs();
  };

  render() {
    const data = this.props.data;
    const isFetching = this.props.isFetching;
    return(
      <div className="list-jobs">
        {data.length > 0 ?
          data.map((job) => (
            <Job 
              key={job.id}
              id={job.id}
              data={job}
            />
          )) : 
          <div className={isFetching ? "not-job-block-hidden" : "not-job-block"}>
            <img src={notAnyJob} alt="noJob" className="img-none-job"/>
            <h2 className="not-job-title">We didn’t find any job</h2>
            <p className="not-job-text">Please try modifying your search to get more results.</p>
          </div>
        }
        <button 
          className={data.length > 0 ? "show-more" : "not-show-btn"} 
          onClick={this.handleClickBtn} 
        >Load more</button>
      </div>
    )
  };
};

ListOfJobs.propTypes = {
  data: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  fetchJobs: PropTypes.func.isRequired,
}

export default ListOfJobs;