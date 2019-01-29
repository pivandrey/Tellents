import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FilterTalents from '../../components/dashboard/mainContentTalents/FilterTalents'
import ListOfTalents from '../../components/dashboard/mainContentTalents/ListOfTalents'

import { fetchTalents } from '../../actions/talentsCardsActions'

import './mainContent.css'

class MainContentTalents extends Component {

  componentDidMount() {
    this.props.fetchTalents()
  }

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

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchTalents,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
)(MainContentTalents)