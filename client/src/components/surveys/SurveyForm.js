// SurveyForm shows a form for user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields = ({ label, name }) => (
    <Field
      key={name}
      label={label}
      type="text"
      name={name}
      component={SurveyField}
    />
  );

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {
            formFields.map(field => this.renderFields(field))
          }
          <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
          <button
            type="submit"
            className="teal btn-flat right white-text"
          >
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

// Validacija
const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value for ${name}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,                             // validacija => same key-value name
  form: 'surveyForm',                   // ime forme koju prati reduxForm
  destroyOnUnmount: false               // cuva podatke u formi nakon sto se unmount
})(SurveyForm);