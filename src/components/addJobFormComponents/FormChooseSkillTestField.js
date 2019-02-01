import React, { Component } from 'react';
import { Field } from 'react-final-form';

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

  render() {
    const data = this.props.promotions;
    const category = this.props.categories;
    return(
      <div className="form-block">
        <button className="form-choose-skill-btn" onClick={this.handleClickBtn}>Category</button>
        {this.state.showPromo &&
          Array.from(data.reduce((acc,promo)=>acc.add(promo.title), new Set())).map((promo) => (
            <div>
              <label>
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
        <button 
          className="form-choose-sub-skill-btn" 
          onClick={this.handleClickBtnSub}
        >Sub Category</button>
        {this.state.showPromoSub && this.state.currentPromoCategory &&
          category.filter((category) => category.name == this.state.currentPromoCategory)[0]
          .skill_categories.map((skill) => (
            <div>
              <label>
                <Field
                  key={"subPromoKey:" + skill.id}
                  name="subpromo"                        /* переделать */
                  type="checkbox"
                  component="input"
                  value={skill.id}
                  onClick={this.handleClickOnCategory}
                />
                {skill.name}
              </label>
            </div>
          ))
        }
        {
          this.state.currentPromoCategory ? 
            data.filter((promo) => promo.title == this.state.currentPromoCategory).map((promo) => (
              <div>
                <label>
                  <Field
                    key={"fullPromoKey:" + promo.id}
                    name="subpromoFULL"                        /* переделать */
                    type="checkbox"
                    component="input"
                    value={promo.id}
                  />{promo.title}<br /><br />{promo.description}
                </label>
              </div>
            )) :
            data.map((promo) => (
              <div>
                <label>
                  <Field
                    key={"fullPromoKey:" + promo.id}
                    name="subpromoFULL"                        /* переделать */
                    type="checkbox"
                    component="input"
                    value={promo.id}
                  />{promo.title}<br /><br />{promo.description}
                </label>
              </div>
            ))
        }
      </div>
    )
  }
}

export default FormChooseSkillTestField

