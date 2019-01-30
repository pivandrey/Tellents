import React, {Component} from 'react'

import './style/jobStyle.css'
import '../../../fonts/font.css'

class Job extends Component {

  getDate = () => {
    const data = this.props.data
    const x = Date.parse(new Date());
    const date = Math.round((x - Date.parse(data.created_at)) / 86400000)
    return date
  }

  render() {
    const data = this.props.data
    return(
      <div className="job-box">
        <div className="job-box-header flexbox">
          <div className="job-box-title">
            <p>{this.getDate()} days ago</p>
            <p>{data.title}</p>
          </div>
          <div className="job-box-header-panel">
            <div className="flexbox job-header-panel-text">
              {data.user ? 
              <img src={data.user.image.url} alt="logo" className="jox-box-user-logo" /> : 
              <p>logo</p>}
              <p className="icon-badge-flat"><span className="path-1"></span></p>
              {data.user.total_rate ? <span>{data.user.total_rate}</span> : <span>N/A</span>}
            </div>
            <div className="job-box-header-panel-user">
              <p>{data.user.full_name}</p>
            </div>
          </div>
        </div>
        <div className="job-box-body">
          <div className="jox-box-tips flexbox">
            <div className="tip">
              <p className="icon icon-location"></p>
              {data.user.country ? <p>{data.user.country}</p> : <p></p>}
            </div>
            <div className="tip">
              <p className="icon icon-clock"></p>
              {(!data.commitment || data.commitment === 'decide_later') ? <p>N/A</p> : <p>&lt;{data.commitment.slice(-2)}h</p>}
            </div>
            <div className="tip">
              <p className="icon icon-award"></p>
              {data.level ? <p>{data.level.substr(0, 3)}</p> : <p></p>}
            </div>
            <div className="tip">
              <p className="icon icon-timer"></p>
              {(data.period && data.period_type) ? <p>{data.period}{data.period_type.substr(0, 1)}</p> : <p></p>}
            </div>
            <div className="tip">
              <p className="icon icon-clock"></p>
              {(data.time_type) ? <p>{data.time_type}</p> : <p>N/A</p>}
            </div>
          </div>
          <div className="job-box-descr">
            <p>{data.description}</p>
          </div>
        </div>
        <div className="jox-box-footer flexbox">
          <div className="jox-box-promo">
            <div className="promo-title">
              <p>{data.promotion_title}</p>
            </div>
            <div className="promo-description">
              <p>{data.promotion_description}</p>
            </div>
          </div>
          <button className="job-box-footer-btn">Free</button>
        </div>
      </div>
    )
  }
}

export default Job