import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './dashboardContentStyle.css'

class JobBoxesHeader extends Component {

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
          <select name="jobs-sort-option">
            <option>Relevance</option>
            <option>Most Saved</option>
            <option>Highest score</option>
            <option>Most Hired</option>
          </select>
          <p>Result:</p>
        </div>
      </div>
    )
  }
}

export default JobBoxesHeader