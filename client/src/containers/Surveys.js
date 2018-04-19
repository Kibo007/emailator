import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';

class Surveys extends Component {
  render() {
    return (
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(Surveys);
