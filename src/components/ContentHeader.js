import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './dashboardContentStyle.css';

class ContentHeader extends Component {

  onSubmit = (values) => {
    this.props.clearCountPage();
    this.props.setSearchRequest(values.search);
    this.props.fetchCards();
  };

  render() {
    const fullName = this.props.fullName;
    return(
      <div className="content-header-flex">
        <p className="content-header-text"><span>Hi {fullName()},</span><br />What are you looking for today?</p>
        <div className="search-container">
          <Form 
            onSubmit={this.onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="search-form">
                <div>
                  <Field
                    name="search"
                    component="input"
                    type="text"
                    placeholder="Search for ..."
                    className="search-block"
                  />
                </div>
                <div>
                  <button type="submit" className="content-header-submit">S
                  </button>
                </div>
              </form>
            )}
          />
          <div>
            <Link to='/dashboard/find/job'><label className="radio-block1"> Jobs</label></Link>
            <Link to='/dashboard/find/talent'><label className="radio-block2">Talents</label></Link>
          </div>
        </div>
      </div>
    )
  };
};

ContentHeader.propTypes = {
  fullName: PropTypes.func.isRequired,
  setSearchRequest: PropTypes.func.isRequired,
  fetchCards: PropTypes.func.isRequired,
  clearCountPage: PropTypes.func.isRequired,
};

export default ContentHeader;