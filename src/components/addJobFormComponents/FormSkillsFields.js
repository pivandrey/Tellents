import React, { Component } from 'react';
import { Field } from 'react-final-form';

import './formsStyle.css'

class FormSkillsFields extends Component {

  state = {
    showSkills: false,
    categoryId: null,
  }

  handleClickCategory = (e) => {
    const categoryId = e.currentTarget.value;
    this.setState ({
      showSkills: true,
      categoryId: categoryId,
    })
  }

  render() {
    const data = this.props.categories;
    return(
      <div className="form-block skills-block">
      <h2>Choose Your Skill Category</h2>
        <div className="skills-block-inputs">
          {
            data.map((category) => (
              <div key={"div" + category.id}>
                <label key={"label" + category.id}>
                  <Field 
                    key={"category:" + category.id}
                    name="category"
                    component="input"
                    type="radio"
                    value={category.id}
                    onClick={this.handleClickCategory}
                  />
                  {category.name}
                </label>
              </div>
            ))
          }
        </div>
        
        {
          this.state.showSkills &&  this.state.categoryId ? 
          <h3 className="skills-block-title">{data.filter((category) => 
            (Number(category.id) === Number(this.state.categoryId)))[0].name}</h3> : <span></span>
        }
        <div className="skills-block-inputs-sub">
          {
            this.state.showSkills && this.state.categoryId ? data.filter((category) => 
            (Number(category.id) === Number(this.state.categoryId)))[0].skill_categories.map((skill) => (
              <div key={"DIVcategory:" + skill.category_id + "skill:" + skill.id}>
                <label key={"LABELcategory:" + skill.category_id + "skill:" + skill.id}>
                  <Field 
                    key={"category:" + skill.category_id + "skill:" + skill.id}
                    name="skill"
                    component="input"
                    type="checkbox"
                    value={skill.id}
                  />{skill.name}
                </label>
              </div>
            )) : <span></span>
          }
        </div>
      </div>
    )
  }
}

export default FormSkillsFields