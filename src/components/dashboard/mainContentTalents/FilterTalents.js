import React, { Component } from 'react'

import './style/filterTalents.css'

class FilterTalents extends Component {

  render() {
    return(
      <div className="filter1">
        <div>
          <p>Experience:</p>
          <div className="filter-checkbox">
            <label><input type="checkbox" name="experience" value="0" />Intern</label>
            <label><input type="checkbox" name="experience" value="1" />Junior</label><br />
            <label><input type="checkbox" name="experience" value="2" />Senior</label>
            <label><input type="checkbox" name="experience" value="3" />Expert</label>
          </div>
        </div>
        <div>
          <p>Job Done Success:</p>
          <div className="filter-checkbox">
            <label><input type="radio" name="success" value="0" />100%</label>
            <label><input type="radio" name="success" value="1" />> 95%</label><br />
            <label><input type="radio" name="success" value="2" />85-95%</label>
            <label><input type="radio" name="success" value="3" />&lt; 85%</label>
          </div>
        </div>
        <div>
          <p>Skill Test Score:</p>
          <div className="filter-checkbox">
            <label><input type="radio" name="skill" value="0" />Best (5)</label>
            <label><input type="radio" name="skill" value="1" />5-4.6</label><br />
            <label><input type="radio" name="skill" value="2" />4.6-4</label>
            <label><input type="radio" name="skill" value="3" />&lt; 4</label>
          </div>
        </div>
        <div>
          <p>Freelancer Rate:</p>
          <div className="filter-checkbox">
            <label><input type="radio" name="rate" value="0" />Best (5)</label>
            <label><input type="radio" name="rate" value="1" />5-4.8</label><br />
            <label><input type="radio" name="rate" value="2" />4.8-4.5</label>
            <label><input type="radio" name="rate" value="3" />&lt; 4.5</label>
          </div>
        </div>
        <div>
          <p>Location:</p>
          <label><select name="location">
            <option>Any location</option>
          </select></label>
        </div>
        <div>
          <p>Languages:</p>
          <label><select name="language">
            <option>Any lang</option>
          </select></label>
        </div>
        <div>
          <p>Availability:</p>
          <div className="filter-checkbox">
            <label><input type="checkbox" name="availability" value="0" />&lt; 20h</label>
            <label><input type="checkbox" name="availability" value="1" />30h</label><br />
            <label><input type="checkbox" name="availability" value="2" />> 30h</label>
            <label><input type="checkbox" name="availability" value="3" />Full Time</label>
          </div>
        </div>
        <div>
          <p>Place of Work:</p>
          <div className="filter-checkbox">
            <label><input type="checkbox" name="place" value="0" />On-Line</label>
            <label><input type="checkbox" name="place" value="1" />On-Site</label><br />
          </div>
        </div>
      </div>
    )
  }
}

export default FilterTalents