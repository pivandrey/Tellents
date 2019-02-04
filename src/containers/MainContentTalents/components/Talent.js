import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style/talentStyle.css';
import '../../../fonts/font.css';

class Talent extends Component {

  render() {
    const data = this.props.data;
    return(
      <div className="talent-box">
        <div className="talent-box-header">
          <div className="talent-box-photo">
            {(data.image.url.length < 30) ? <img src={data.image.url} alt="Logo" className="jox-box-user-logo" /> :
            <img src="https://s3.amazonaws.com/wll-community-production/images/no-avatar.png" alt="Logo" className="jox-box-user-logo" />}
          </div>
          <div className="talent-box-title">
            <p>{data.full_name}</p>
          </div>
          <div className="talent-box-rate">
            {data.total_rate ? <p>{data.total_rate}</p> : <p>N/A</p>}
          </div>
        </div>
        <div className="talent-box-body flexbox">
          <div className="talent-box-tips">
            <div className="tip">
              <span className="icon icon-award"></span>
              <span>95%</span>
            </div>
            <div className="tip">
              <span className="icon icon-jobs"></span>
              <span>h/j</span>
            </div>
            <div className="tip">
              <span className="icon icon-location"></span>
              {data.country ? <span>{data.country}</span> : <span>N/A</span>}
            </div>
            <div className="tip">
              <span className="icon icon-clock-1"></span>
              {data.total_hours ? <span>{data.total_hours}</span> : <span>N/A</span>}
            </div>
            <div className="tip">
              <span className="icon icon-wallet"></span>
              {data.price ? <span>{data.price}</span> : <span>N/A</span>}
            </div>
          </div>
          <div className="talent-box-content">
            <div className="talent-box-descr">
              {data.profession ? <p>{data.profession.description}</p> : <p>No Introduction set yet</p>}
            </div>
            <div className="skill-tags-block">
              {data.skill_tags[0] ? <p>{data.skill_tags[0].name}</p> : <span></span>}
            </div>
          </div>
        </div>
        <div className="jox-box-footer flexbox">
        {data.promotions[0] ?
          <div className="jox-box-promo">
            <div className="promo-title">
               <p>{data.promotions[0].title}</p> 
            </div>
            <div className="promo-description">
              <p>{data.promotions[0].description}</p>
            </div>
          </div>
          : <p>The user has not promoted himself yet</p>}
          <button className="job-box-footer-btn">Free</button>
        </div>
      </div>
    )
  };
};

Talent.propTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};

export default Talent;