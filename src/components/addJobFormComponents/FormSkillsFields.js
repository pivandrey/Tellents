import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormSkillsFields extends Component {

  state = {
    showSkills: false,
    categoryId: '',
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
      <div className="form-block">
      <h2>Choose Your Skill Category</h2>
        {
          data.map((category) => (
            <div>
              <label>
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
        {this.state.showSkills && 
          this.state.categoryId ? data.filter((category) => 
          (category.id == this.state.categoryId))[0].skill_categories.map((skill) => (
            <div>
              <label>
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
    )
  }
}

export default FormSkillsFields