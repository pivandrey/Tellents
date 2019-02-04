import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form'

import FormTitleFields from '../components/addJobFormComponents/FormTitleFields';
import FormSkillsFields from '../components/addJobFormComponents/FormSkillsFields';
import FormCreateSkillTestField from '../components/addJobFormComponents/FormCreateSkillTestField';
import FormChooseSkillTestField from '../components/addJobFormComponents/FormChooseSkillTestField';
import FormPaymentFields from '../components/addJobFormComponents/FormPaymentFields';
import FormTimeFields from '../components/addJobFormComponents/FormTimeFields';
import FormTalentCommitment from '../components/addJobFormComponents/FormTalentCommitment';
import FormTalentLevelFields from '../components/addJobFormComponents/FormTalentLevelFields';
import FormProjectTypeFields from '../components/addJobFormComponents/FormProjectTypeFields';
import FormContractGeneralNotes from '../components/addJobFormComponents/FormContractGeneralNotes';

import { closeModalAddJob, postedJob } from '../actions/addJobActions'

import './addJobModalStyle.css'

class AddJobModal extends Component {
  onSubmit = (values) => {
    this.props.postedJob(values)
  }
  render() {
    return(
      <div className="modal-window">
        <div className='modal-header'>
          <h1>Post a Job</h1>
          <button className="modal-exit" onClick={this.props.closeModalAddJob}>X</button>
        </div>
        <div className="modal-body">
          
          <Form
            onSubmit={this.onSubmit}
            validate={values => {
              const errors ={};
              if (!values.title) {
                errors.title = "Required Title";
              }
              if (!values.description) {
                errors.description = "Required Description";
              }
              if (!values.price) {
                errors.price = "Required Price";
              }
              if (!values.agree) {
                errors.agree = "Required Agree";
              }
              return errors
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <FormTitleFields />
                <FormSkillsFields categories={this.props.categories}/>
                <FormCreateSkillTestField />
                <FormChooseSkillTestField
                  categories={this.props.categories}
                  promotions={this.props.promotions}
                />
                <FormPaymentFields />
                <FormTimeFields />
                <div className="form-flex">
                  <FormTalentCommitment />
                  <FormTalentLevelFields />
                  <FormProjectTypeFields />
                </div>
                <FormContractGeneralNotes />
                <div className="finish-block">
                  <h2>Finish</h2>
                  <div>
                    <label>
                      <Field
                        component="input"
                        type="radio"
                        name="agree"
                        value="true"
                      />I agree for the terms of use</label>
                  </div>
                  <button type="submit" className="all-form-submit">POST</button>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    addJobModalFlag: store.addJobModal.showModalAddJob,
    categories: store.addJobModal.categories,
    promotions: store.addJobModal.promotions,
    jobPostedSuccess: store.addJobModal.jobPostedSuccess,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    closeModalAddJob,
    postedJob
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
)(AddJobModal);;