import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

import './dashboardContentStyle.css'

class ContentHeader extends Component {

  render() {
    const { fullName } = this.props
    return(
      <div className="content-header-flex">
        <p class="content-header-text"><span>Hi {fullName} ,</span><br />What are you looking for today?</p>
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
                <label className="radio-block1">
                  <Field
                    name="homePageFilter"
                    id="jobs-filter-1"
                    value="0"
                    component="input"
                    type="radio"
                    className="radio-block"
                  />
                  Jobs
                </label>
                <label className="radio-block2">
                  <Field
                    name="homePageFilter"
                    id="talents-filter-2"
                    value="1"
                    component="input"
                    type="radio"
                    className="radio-block"
                  />
                  Talents
                </label>
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