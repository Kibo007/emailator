import React, { Component } from 'react';

import SurveyForm from '../components/surveyForm/Form';
import SurveyReview from '../components/surveyForm/SurveyReview';

class NewSurvey extends Component {
  constructor() {
    super();
    this.state = {
      showSurveyReview: false,
    };
  }

  onGoBack = () => {
    this.setState({ showSurveyReview: false });
  };

  onSurveySubmit = () => {
    this.setState({ showSurveyReview: true });
  };

  render() {
    return (
      <div>
        {this.state.showSurveyReview ? (
          <SurveyReview onGoBack={this.onGoBack} />
        ) : (
          <SurveyForm onSurveySubmit={this.onSurveySubmit} />
        )}
      </div>
    );
  }
}

export default NewSurvey;
