import React, { Component } from 'react';
import { Field } from 'react-final-form';

import './formsStyle.css'

class FormSkillsFields extends Component {

  state = {
    showSkills: false,
    categoryId: null,
    skillId: [],
  }

  handleClickCategory = (e) => {
    const categoryId = e.currentTarget.value;
    this.setState ({
      showSkills: true,
      categoryId: categoryId,
    })
  }

  handleClickSkill = (e) => {
    const skillIdValue = e.currentTarget.value;
    const skillArray = this.state.skillId;
    
    if (this.find(skillArray, skillIdValue) > -1) {
      this.setState(state => {
        const skillId = state.skillId.filter(skill => skill !== skillIdValue);
        return {
          skillId,
        };
      });
    } else {
      this.setState ({
        skillId: skillArray.concat(skillIdValue),
      })
    }
  }

  find = (array, value) => {
    for (var i = 0; i < array.length; i++) {
      if (Number(array[i]) === Number(value)) return i;
    }
  
    return -1;
  }

  render() {
    const data = this.props.categories;
    return(
      <div className="form-block skills-block">
      <h2>Choose Your Skill Category</h2>
        <div className="skills-block-inputs">
          {
            data.map((category) => (
              <div className="checkbox-element" key={"div:" + category.id}>
                <span className="checkbox-circle"  key={"span:" + category.id}>
                  <span
                    key={"subspan:" + category.id}
                    className={Number(this.state.categoryId) === Number(category.id) 
                      ? "icon-check-mark" : "non-check"}
                  ></span>
                </span>
                <label key={"label" + category.id} className="checkbox-label">
                  <Field 
                    key={"category:" + category.id}
                    name="category"
                    component="input"
                    type="radio"
                    value={category.id}
                    className="checkbox-input"
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
              <div key={"DIVcategory:" + skill.category_id + "skill:" + skill.id} className="checkbox-element">
                <span className="checkbox-circle" key={"span:" + skill.category_id}>
                  <span
                    key={"subspan:" + skill.category_id}
                    className={(this.find(this.state.skillId, skill.id) > -1)
                      ? "icon-check-mark" : "non-check"}
                  ></span>
                </span>
                <label key={"LABELcategory:" + skill.category_id + "skill:" + skill.id}  className="checkbox-label">
                  <Field 
                    key={"category:" + skill.category_id + "skill:" + skill.id}
                    name="skill"
                    component="input"
                    type="checkbox"
                    value={skill.id}
                    className="checkbox-input"
                    onClick={this.handleClickSkill}
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