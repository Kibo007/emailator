import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import _map from 'lodash/map';
import _forEach from 'lodash/forEach';
import { Field } from 'redux-form';
import surveyFields from './formConfig';
import SurveyField from './SurveField';
import validateStringOfEmails from '../../utils/emailValidations';
import { Link } from 'react-router-dom';

class SurveyForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {_map(surveyFields, ({ name, label }) => (
          <Field key={name} name={name} label={label} component={SurveyField} />
        ))}
        <Link to="/surveys" className="waves-effect waves-light btn left red">
          <i className="material-icons right">clear</i>
          Back
        </Link>
        <button className="waves-effect waves-light btn right" type="submit">
          <i className="material-icons right">check</i>
          Next
        </button>
      </form>
    );
  }
}

const validate = values => {
  const error = {};
  error.receipients = validateStringOfEmails(values.receipients || '');

  _forEach(surveyFields, field => {
    if (!values[field.name]) {
      error[field.name] = `please fill up field ${field.label}, can't be empty`;
    }
  });

  return error;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
