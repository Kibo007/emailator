import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapsStateToProps, mapActionToDispatch } from '../data/module/auth';

import Header from '../components/Header';
import Surveys from './Surveys';
import NewSurvey from './NewSurvey';
import Lending from '../components/Lending';
import PrivateRoute from '../components/PrivateRoute';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  componentDidUpdate() {
    const { user, history } = this.props;
    if (user && history.location.pathname === '/') {
      history.push('/surveys');
    }
  }

  render() {
    const { loading, handleToken, user } = this.props;
    if (loading || user === null) {
      return 'loading...';
    }
    return (
      <div>
        <Header user={user} handleToken={handleToken} />
        <Route exact path="/" component={Lending} />
        <PrivateRoute exact path="/surveys" component={Surveys} auth={user} />
        <PrivateRoute
          exact
          path="/surveys/new"
          component={NewSurvey}
          auth={user}
        />
      </div>
    );
  }
}

export default withRouter(connect(mapsStateToProps, mapActionToDispatch)(App));
