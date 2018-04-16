import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapActionToDispatch } from '../data/module/auth';

import Header from './Header';
const Lending = () => <div>Lending</div>;
const Dashboard = () => <div>Dashboard</div>;
const NewSurvay = () => <div>NewSurvay</div>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Lending} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new-survey" component={NewSurvay} />
      </div>
    );
  }
}

export default connect(null, mapActionToDispatch)(App);
