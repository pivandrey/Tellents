import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SortComponentJobs extends Component {

  state = {
    showSort: false,
  };

  handleShowSort = () => {
    this.setState ({
      showSort: !this.state.showSort,
    })
  };


  render() {
    return(
      <div className="jobBoxes-sort">
        <p>Sort by</p>
        <button className="sort-show-btn" onClick={this.handleShowSort}>
          <span>Relevance</span>
        </button>
        {this.state.showSort &&
        <div className="sort-show-block">
          <label className="sort-show-item"><input 
          type="radio" 
          name="sort" 
          value="newest" 
          onClick={this.props.handleClickSort}
        />Newest</label>
        <label className="sort-show-item"><input 
          type="radio" 
          name="sort" 
          value="budget" 
          onClick={this.props.handleClickSort}
        />Highest budget</label>
        <label className="sort-show-item"><input 
          type="radio" 
          name="sort" 
          value="relevance" 
          onClick={this.props.handleClickSort}
        />Relevance</label>
        <label className="sort-show-item"><input 
          type="radio" 
          name="sort" 
          value="longterm" 
          onClick={this.props.handleClickSort}
        />Long term</label>
        </div>}
        <p>Result:{this.props.cardsCount()}</p>
      </div>
    )
  };
};

SortComponentJobs.propTypes = {
  handleClickSort: PropTypes.func.isRequired,
  cardsCount: PropTypes.func.isRequired,
};

export default SortComponentJobs;