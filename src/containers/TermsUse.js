import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeTerms } from '../actions/termsActions'
import { validateAgree } from '../actions/addJobActions'

import './termsStyle.css'

class TermsUse extends Component {

  handleClickAgree = () => {
    this.props.closeTerms()
  }

  handleClickValidate = () => {
    this.props.validateAgree();
  }

  render() {
    return (
      <div className="terms-window">
        <h2 className="terms-title">Terms of Use</h2>
        <p className="terms-text">Philosophy is considered a science but it is difficult to say, when one has to compare with an ordinary science, for example biology, or chemistry. This is a question that turns into a burning problem among the scientists and linguists all over the world. Can philosophy be a science? What does philosophy operate with? It operates with categories, which can be as wide and as interchangeable as one can only imagine. Ordinary science operates with definitions, which are quite limited in their field of research. Ordinary science uses terms and laws of that very science to continue the research, uniting with the others in very rare cases. Philosophy gets into the sense of every science trying to achieve results.<br/><br/>
We also can not call philosophy a supra-science, for it also uses hypothesis and arguments to state the opinion. But there is the obvious thing: there are now laws in philosophy and never will be, for the science changes with the age, the needs, beliefs and requirements of the citizens. To prove your opinion, you can write the definition essay and state all the facts and arguments you know to prove one way or another. This is also a nice way to research the problem and see what the solution is. But you have to research it carefully; otherwise definition essays will not be fruitful. As all sciences philosophy has gone through its stages of development. Some scientists believe that the crib of philosophy was mythology and religion. If to see the principles of life and some primitive morals stated in some myths we may see that the statement is quite true and philosophy still continues to develop out of social beliefs and ideas. Philosophy is a science which is obligatory learned by every college student in order for him to establish his own philosophy of life. It is quite exciting to find answers to ever existing questions: who am I? What do I know? What can I know? What am I destined to do? Here is one more interesting observation. You can see that all famous philosophers were researching other science fields also. For example, Freud, Yung, Kafka and others were doing research in linguistics and social sciences. Their numerous creations are the pride of human history for they revealed some secrets that remained undiscovered for a long time before their great contributions.<br/><br/>
There are so many currents and branches, so many schools of philosophy that it is hard to decide, which one do you prefer and agree with. This much depends on the country, family, society you live in. This is one more difference between philosophy and other natural sciences. The law is stable for any country; gravity exists in India, same as in Brazil. Philosophy is a hard science, for it is very difficult to understand the sense of the dogma reading it only once. It is of course, not easy, but gives credit for you if you get interested and somewhere, being at the social event you quote one of the famous doctors of philosophy and make a great impression of an educated and intelligent personality.</p>
        <label className="term-input-label">
          <input
            type="checkbox"
            name="agreeTerm"
            onClick={this.handleClickValidate}
          />
        I have read Terms of Use</label>
        <button type="button" className="btn-agree" onClick={this.handleClickAgree}>AGREE</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    closeTerms,
    validateAgree,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(TermsUse);