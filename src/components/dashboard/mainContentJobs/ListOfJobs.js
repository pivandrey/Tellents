import React, {Component} from 'react'

import Job from './Job'

import './style/listOfJobsStyle.css'

class ListOfJobs extends Component {

  handleClickBtn = () => {
    this.props.setPage();
    this.props.fetchJobs();
  }

  render() {
    const data = this.props.data
    return(
      <div className="list-jobs">
        {
          data.map((job) => (
            <Job 
              key={job.id}
              id={job.id}
              data={job}
            />
          ))
        }
        <button className="show-more" onClick={this.handleClickBtn} >Load more</button>
      </div>
    )
  }
}

export default ListOfJobs