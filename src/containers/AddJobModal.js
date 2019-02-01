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

import { closeModalAddJob } from '../actions/addJobActions'

import './addJobModalStyle.css'

class AddJobModal extends Component {
  onSubmit = (values) => {
    console.log(values)
  }
  render() {
    return(
      <div className="modal-window">
        <div className='modal-header'>
          <button className="modal-exit" onClick={this.props.closeModalAddJob}>X</button>
        </div>
        <div className="modal-body">
          <h1>Post a Job</h1>
          <Form
            onSubmit={this.onSubmit}
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
                <FormTalentCommitment />
                <FormTalentLevelFields />
                <FormProjectTypeFields />
                <FormContractGeneralNotes />
                <button type="submit">subnit</button>
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
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    closeModalAddJob,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
)(AddJobModal);;