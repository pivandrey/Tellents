import React, { Component } from 'react'

import FilterTalents from '../../components/dashboard/mainContentTalents/FilterTalents'
import ListOfCards from '../../components/dashboard/mainContentTalents/ListOfCards'

import './mainContent.css'

class MainContentTalents extends Component {

  render() {
    return(
      <div className="main-content">
        <FilterTalents />
        <ListOfCards />
        <button className="btn-add-jobs">Start New Project</button>
      </div>
    )
  }
}

export default MainContentTalents