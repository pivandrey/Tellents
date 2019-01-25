import React, { Component } from 'react'

import FilterJobs from '../../components/dashboard/mainContentJobs/FilterJobs'
import ListOfCards from '../../components/dashboard/mainContentJobs/ListOfCards'

class MainContentJobs extends Component {

  render() {
    return(
      <div className="main-content">
        <FilterJobs />
        <ListOfCards />
        <button className="btn-add-jobs">Start New Project</button>
      </div>
    )
  }
}

export default MainContentJobs