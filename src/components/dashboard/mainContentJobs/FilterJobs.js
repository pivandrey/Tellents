import React, { Component } from 'react'

class FilterJobs extends Component {

  render() {
    return(
      <div className="filter">
        <form>
          <p>Experience: </p>
          <label><input type="checkbox" name="experience" value="0" />Intern</label>
          <label><input type="checkbox" name="experience" value="1" />Junior</label><br />
          <label><input type="checkbox" name="experience" value="2" />Senior</label>
          <label><input type="checkbox" name="experience" value="3" />Expert</label><hr />
          <p>Posted:</p>
          <label><input type="radio" name="posted" value="0" />24h</label>
          <label><input type="radio" name="posted" value="1" />3d</label><br />
          <label><input type="radio" name="posted" value="2" />1w</label>
          <label><input type="radio" name="posted" value="3" />>1w</label> <hr />
          <p>Place:</p>
          <label><input type="checkbox" name="place" value="0" />On-line</label>
          <label><input type="checkbox" name="place" value="1" />On-site</label><hr />
          <p>Location:</p>
          <label><select name="location">
            <option>Any location</option>
          </select></label><hr />
          <p>Languages:</p>
          <label><select name="language">
            <option>Any lang</option>
          </select></label><hr />
          <p>Availability:</p>
          <label><input type="checkbox" name="availability" value="0" />&lt; 20h</label>
          <label><input type="checkbox" name="availability" value="1" />> 20h</label><br />
          <label><input type="checkbox" name="availability" value="2" />Full-Time</label>
          <label><input type="checkbox" name="availability" value="3" />Undefined</label><hr />
          <p>Payment:</p>
          <label><input type="checkbox" name="payment" value="0" />Fixed Price</label>
          <label><input type="checkbox" name="payment" value="1" />Hourly</label>
          <input type="text" name="payment-min" placeholder="0" /> 
          <span>to</span>
          <input type="text" name="payment-max" placeholder="1000" />
          <button type="submit">Find</button><hr />
          <p>Budget:</p>
          <select name="budget">
            <option>$0 - $100</option>
            <option>$100 - $300</option>
            <option>$300 - $1000</option>
            <option>>$1000</option>
            <option>Not defined (Empty)</option>
          </select><hr />
          <p>Proposals:</p>
          <label><input type="radio" name="proposals" value="0" />0 - 5</label>
          <label><input type="radio" name="proposals" value="1" />5 - 10</label><br />
          <label><input type="radio" name="proposals" value="2" />10 - 20</label>
          <label><input type="radio" name="proposals" value="3" />> 20</label><br />
          <label><input type="radio" name="proposals" value="4" />None</label><hr />
          <p>Job Delivery:</p>
          <label><input type="checkbox" name="delivery" value="0" />Not defined</label>
          <label><input type="checkbox" name="delivery" value="1" />Less 1W</label>
        </form>
      </div>
    )
  }
}

export default FilterJobs