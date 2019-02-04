import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SortComponentTalents extends Component {

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
          value="relevance" 
          onClick={this.props.handleClickSort}
        />Relevance</label>
        <label className="sort-show-item"><input 
          type="radio" 
          name="sort" 
          value="saved" 
          onClick={this.props.handleClickSort}
        />Most saved</label>
        <label className="sort-show-item"><input 
          type="radio" 
          name="sort" 
          value="rate" 
          onClick={this.props.handleClickSort}
        />Highest Score</label>
        <label className="sort-show-item"><input 
          type="radio" 
          name="sort" 
          value="hired" 
          onClick={this.props.handleClickSort}
        />Most Hired</label>
        </div>}
        <p>Result:{this.props.cardsCount()}</p>
      </div>
    )
  };
};

SortComponentTalents.propTypes = {
  handleClickSort: PropTypes.func.isRequired,
  cardsCount: PropTypes.func.isRequired,
};

export default SortComponentTalents;