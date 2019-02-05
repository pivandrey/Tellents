import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form'

import FormTitleFields from './components/FormTitleFields';
import FormSkillsFields from './components/FormSkillsFields';
import FormCreateSkillTestField from './components/FormCreateSkillTestField';
import FormChooseSkillTestField from './components/FormChooseSkillTestField';
import FormPaymentFields from './components/FormPaymentFields';
import FormTimeFields from './components/FormTimeFields';
import FormTalentCommitment from './components/FormTalentCommitment';
import FormTalentLevelFields from './components/FormTalentLevelFields';
import FormProjectTypeFields from './components/FormProjectTypeFields';
import FormContractGeneralNotes from './components/FormContractGeneralNotes';

import { closeModalAddJob, postedJob, validateAgree } from '../../actions/addJobActions'
import { showTerms } from '../../actions/termsActions'

import './addJobModalStyle.css'

class AddJobModal extends Component {

  onSubmit = (values) => {
    const categoryData = this.props.categories.filter((category) => (
      Number(category.id) === Number(values.category)))[0];
    const promotionsData = this.props.promotions.filter((promo) => (
      Number(promo.id) === Number(values.subpromoId)))[0];
    
    const data = {
      category: categoryData,
      commitment: values.commitment,
      contract_general_notes: values.contract_general_notes,
      description: values.description,
      hourly_price: Number(values.hourly_price),
      level: values.level,
      payment: values.payment,
      period: Number(values.period),
      period_type: values.period_type,
      promotion: promotionsData,
      promotion_description: promotionsData.description,
      promotion_title: promotionsData.title,
      price: Number(values.price),
      skill_tags: [],
      time_type: values.time_type,
      title: values.title,
    }
    this.props.postedJob(data)
  }

  showTermsModal = () => {
    this.props.showTerms();
    this.props.closeModalAddJob();
  }

  handleValidateTerm = () => {
    const validate = this.props.validate;
    if(validate) {
      return 'true'
    } else {
      return ''
    }
  }

  handleCLickValidateAgree = () => {
    if (this.props.validate) {
      this.props.validateAgree(false)
    } else {
      this.props.validateAgree(true)
    }
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
            initialValues={{ agree: this.handleValidateTerm() }}
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
                      {!this.props.validate && 
                        <p className="form-agree">You need to agree with terms of use to continue</p>
                      }
                      <Field name="agree" type="radio" >
                        {({ input, meta }) => (
                          <div className="checkbox-element">
                            <input {...input} 
                              id="agree" 
                              type="radio" 
                              value="true" 
                              onClick={this.handleCLickValidateAgree}
                              checked={this.props.validate}
                              className="checkbox-input"
                            />
                            <span className="checkbox-circle">
                              <span
                                className={this.props.validate ? "icon-check-mark" : "non-check"}
                              ></span>
                            </span>
                            <label htmlFor="agree" className="checkbox-label">I agree for the{' '}
                              
                            </label>
                            <button 
                                className="form-btn-terms"
                                onClick={this.showTermsModal}
                                type="button"
                              >terms of use</button>
                            <br/>{meta.error && meta.touched && <span className="error">{meta.error}</span>}
                          </div>
                        )}
                      </Field>
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
    validate: store.addJobModal.validateAgree,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    closeModalAddJob,
    postedJob,
    validateAgree,
    showTerms,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
)(AddJobModal);;