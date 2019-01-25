import React, {Component} from 'react'

import Job from './Job'

import './listOfJobsStyle.css'

class ListOfJobs extends Component {
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
      </div>
    )
  }
}

export default ListOfJobs