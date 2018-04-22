import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import SurveysCard from '../components/SurveysCard';
import { connect } from 'react-redux';
import { mapStateToProps, mapActionToDispatch } from '../data/module/surveys';
import _map from 'lodash/map';

class Surveys extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return (
      <div>
        <div className="container">
          {_map(this.props.surveys, survey => {
            return <SurveysCard key={survey._id} survey={survey} />;
          })}
        </div>
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToDispatch)(
  reduxForm({
    form: 'surveyForm',
  })(Surveys)
);
