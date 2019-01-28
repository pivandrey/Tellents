import React, { Component } from 'react'

import FilterTalents from '../../components/dashboard/mainContentTalents/FilterTalents'
import ListOfTalents from '../../components/dashboard/mainContentTalents/ListOfTalents'

import './mainContent.css'

class MainContentTalents extends Component {

  render() {
    return(
      <div className="main-content">
        <FilterTalents />
        <ListOfTalents />
      </div>
    )
  }
}

export default MainContentTalents