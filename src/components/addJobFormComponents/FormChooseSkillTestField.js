import React, { Component } from 'react';
import { Field } from 'react-final-form';

class FormChooseSkillTestField extends Component {

  render() {
    const data = []
    return(
      <div className="form-block">
        <p>CHOOSE SKILL TESST</p>
      </div>
    )
  }
}

export default FormChooseSkillTestField

/* data.reduce((acc,promo)=>acc.add(promo.title), new Set()).map((promo) => (
  <div>
    <label>
      <Field 
        key={"promoKey:" + promo}
        name="category"
        component="input"
        type="radio"
        value={promo}
      />
      {promo}
    </label>
  </div>
)) */