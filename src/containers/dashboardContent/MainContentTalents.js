import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilterTalents from '../../components/dashboard/mainContentTalents/FilterTalents'
import ListOfTalents from '../../components/dashboard/mainContentTalents/ListOfTalents'

import './mainContent.css'

class MainContentTalents extends Component {

  render() {
    const { talents } = this.props;
    return(
      <div className="main-content">
        <FilterTalents />
        <ListOfTalents data={talents}/>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    talents: store.talents.talents,
  }
};

export default connect(
  mapStateToProps,
)(MainContentTalents)