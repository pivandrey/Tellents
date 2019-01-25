import React, {Component} from 'react'

import './jobStyle.css'

class Job extends Component {

  render() {
    const data = this.props.data
    return(
      <div className="job-box">
        <div className="job-box-header">
          <div className="job-box-title">
            <p>{data.created_at}</p>
            <p>{data.title}</p>
          </div>
          <div className="job-box-header-panel">
            
          </div>
        </div>
      </div>
    )
  }
}

export default Job