import React, { Component } from 'react';
import { Field } from 'react-final-form';

import './formsStyle.css';

class FormChooseSkillTestField extends Component {

  state = {
    showPromo: false,
    showPromoSub: false,
    currentPromoCategory: '',
  }

  handleClickBtn = () => {
    this.setState ({
      showPromo: !this.state.showPromo,
    })
  }

  handleClickBtnSub = () => {
    this.setState ({
      showPromoSub: !this.state.showPromoSub,
    })
  }

  handleClickOnCategory = (e) => {
    this.setState ({
      currentPromoCategory: e.currentTarget.value,
    })
  }

  setNameForButton = () => {
    const category = this.state.currentPromoCategory;
    if (category) return category
    else return "Category"
  }

  render() {
    const data = this.props.promotions;
    const category = this.props.categories;
    return(
      <div className="form-block choose-skills-block">
        <div className="choose-skill-btns-and-promo">
          <button 
            className="form-choose-skill-btn" 
            onClick={this.handleClickBtn}
            type="button"
          >{this.setNameForButton()}</button>
          <div className="promo-modal-one">
            {
              this.state.showPromo &&
              Array.from(data.reduce((acc,promo)=>acc.add(promo.title), new Set())).map((promo) => (
                <div key={"DIVpromoKey:" + promo}>
                  <label key={"LABELpromoKey:" + promo}>
                    <Field 
                      key={"promoKey:" + promo}
                      name="promo"                        /* переделать */
                      component="input"
                      type="radio"
                      value={promo}
                      onClick={this.handleClickOnCategory}
                    />
                    {promo}
                  </label>
                </div>
              ))
            }
          </div>
          <button 
            className="form-choose-sub-skill-btn" 
            onClick={this.handleClickBtnSub}
            type="button"
          >Sub Category</button>
          <div className="promo-modal-one promo-modal-two">
            {
              this.state.showPromoSub && this.state.currentPromoCategory &&
              category.filter((category) => category.name == this.state.currentPromoCategory)[0]
              .skill_categories.map((skill) => (
                <div key={"DIVsubPromoKey:" + skill.id}>
                  <label key={"LABELsubPromoKey:" + skill.id}>
                    <Field
                      key={"subPromoKey:" + skill.id}
                      name="subpromo"                        /* переделать */
                      type="checkbox"
                      component="input"
                      value={skill.id}
                    />
                    {skill.name}
                  </label>
                </div>
              ))
            }
          </div>
        </div>
        <div className="all-promo-block">
          {
            this.state.currentPromoCategory ? 
              data.filter((promo) => promo.title == this.state.currentPromoCategory).map((promo) => (
                <div key={"DIVfullPromoKey:" + promo.id}>
                  <Field
                    key={"fullPromoKey:" + promo.id}
                    name="subpromoFULL"   
                    id={"subpromoFULL" + promo.id}                      /* переделать */
                    type="checkbox"
                    component="input"
                    value={promo.id}
                  />
                  <label htmlFor={"subpromoFULL" + promo.id} key={"LABELfullPromoKey:" + promo.id}>
                    {promo.title}<br /><br />{promo.description}
                  </label>
                </div>
              )) :
              data.map((promo) => (
                <div key={"DIVfullPromoKey:" + promo.id}>
                  <Field
                    key={"fullPromoKey:" + promo.id}
                    name="subpromoFULL"  
                    id={"subpromoFULL" + promo.id}                      /* переделать */
                    type="checkbox"
                    component="input"
                    value={promo.id}
                  />
                  <label htmlFor={"subpromoFULL" + promo.id} key={"LABELfullPromoKey:" + promo.id}>
                    {promo.title}<br /><br />{promo.description}
                  </label>
                </div>
              ))
          }
        </div>
      </div>
    )
  }
}

export default FormChooseSkillTestField

