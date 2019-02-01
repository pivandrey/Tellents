import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import FilterTalents from '../../components/dashboard/mainContentTalents/FilterTalents';
import ListOfTalents from '../../components/dashboard/mainContentTalents/ListOfTalents';

import { fetchTalents } from '../../actions/talentsCardsActions';
import { setPage, clearCountPage } from '../../actions/pageActions';

import './mainContent.css';

class MainContentTalents extends Component {

  componentDidMount() {
    this.props.clearCountPage();
    this.props.fetchTalents()
  };

  render() {
    const { talents } = this.props;
    return(
      <div className="main-content">
        <FilterTalents />
        <ListOfTalents 
          data={talents}
          setPage={this.props.setPage} 
          fetchTalents={this.props.fetchTalents} 
        />
      </div>
    )
  };
};

MainContentTalents.propTypes = {
  talents: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
}

const mapStateToProps = store => {
  return {
    talents: store.talents.talents,
    filters: store.filterTalents,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchTalents,
    setPage,
    clearCountPage,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
)(MainContentTalents);