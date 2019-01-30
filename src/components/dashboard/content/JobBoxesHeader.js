import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './dashboardContentStyle.css'

class JobBoxesHeader extends Component {
  
  state = {
    showSort: false,
  }

  handleShowSort = () => {
    this.setState ({
      showSort: !this.state.showSort,
    })
  };

  handleClickSort = (e) => {
    const value = e.target.value
    this.props.clearCountPage();
    this.props.sort(value);
    this.props.fetchJobs();
  };

  render() {
    return(
      <div className="jobBoxes">
        <div className="jobBoxes-radio">
          <Link to='/dashboard/find/job' className="jobBoxes-header-jobs"> 
            <label>
              Jobs
                <input type="radio" name="jobBoxesFilter" value="0" className="radio-block" />
            </label>
          </Link>
          <Link to='/dashboard/find/talent' className="jobBoxes-header-talents">
            <label>
              Talents
              <input type="radio" name="jobBoxesFilter" value="0" className="radio-block" />
            </label>
          </Link>
        </div>
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
            onClick={this.handleClickSort}
          />Newest</label>
          <label className="sort-show-item"><input 
            type="radio" 
            name="sort" 
            value="budget" 
            onClick={this.handleClickSort}
          />Highest budget</label>
          <label className="sort-show-item"><input 
            type="radio" 
            name="sort" 
            value="relevance" 
            onClick={this.handleClickSort}
          />Relevance</label>
          <label className="sort-show-item"><input 
            type="radio" 
            name="sort" 
            value="longterm" 
            onClick={this.handleClickSort}
          />Long term</label>
          </div>}
          <p>Result:</p>
        </div>
      </div>
    )
  }
}

export default JobBoxesHeader