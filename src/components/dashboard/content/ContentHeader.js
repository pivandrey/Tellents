import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom'

import './dashboardContentStyle.css'

class ContentHeader extends Component {

  render() {
    const fullName = this.props.fullName
    return(
      <div className="content-header-flex">
        <p className="content-header-text"><span>Hi {fullName()},</span><br />What are you looking for today?</p>
        <Form 
          onSubmit={this.onSubmit}
          initialValues={{ homePageFilter: '0' }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
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
                <Link to='/dashboard/find/job'><label className="radio-block1"> Jobs</label></Link>
                <Link to='/dashboard/find/talent'><label className="radio-block2">Talents</label></Link>
              </div>
              <div>
                <button type="submit" className="content-header-submit">S
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </div>
    )
  }
}

export default ContentHeader