import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapActionToDispatch } from '../data/module/auth';

import Header from '../components/Header';
import Surveys from './Surveys';
import NewSurvey from './NewSurvey';
import Lending from '../components/Lending';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Lending} />
        <Route exact path="/surveys" component={Surveys} />
        <Route exact path="/surveys/new" component={NewSurvey} />
      </div>
    );
  }
}

export default withRouter(connect(null, mapActionToDispatch)(App));
