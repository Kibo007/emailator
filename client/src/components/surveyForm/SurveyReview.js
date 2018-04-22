import React from 'react';
import surveyFields from './formConfig';
import _map from 'lodash/map';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapActionToDispatch,
} from '../../data/module/survayForm';
import { withRouter } from 'react-router-dom';

const SurveyReview = ({ surveyValues, history, onGoBack, sendSurvey }) => {
  const renderFileds = _map(surveyFields, field => (
    <div key={field.name}>
      <label>{field.label}</label>
      <p>{surveyValues[field.name]}</p>
    </div>
  ));

  return (
    <div>
      {renderFileds}
      <button
        className="waves-effect waves-light btn left yellow darken-3"
        onClick={onGoBack}
      >
        <i className="material-icons right">chevron_left</i>
        Back
      </button>
      <button
        className="waves-effect waves-light btn right green"
        onClick={() => sendSurvey(surveyValues, history)}
      >
        <i className="material-icons right">send</i>
        Submit
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapActionToDispatch)(
  withRouter(SurveyReview)
);
