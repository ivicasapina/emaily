// SurveyNew shows SurveyForm and SurveyNewReview

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = {
    showFormReview: false
  };

  renderContent = () => {
    if (this.state.showFormReview) {
      return <SurveyFormReview onCancel={this.onCancel} />
    }

    return <SurveyForm onSurveySubmit={this.onSurveySubmit} />
  }

  onCancel = () => {
    this.setState(() => ({ showFormReview: false }));
  }

  onSurveySubmit = () => {
    this.setState(() => ({ showFormReview: true }));
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);