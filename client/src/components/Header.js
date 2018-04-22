import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { mapsStateToProps, mapActionToDispatch } from '../data/module/auth';
import StripePayments from './StripePayment';

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">login with google</a>
          </li>
        );
      default:
        return (
          <Fragment>
            <li style={{ margin: '0 10px' }}>
              <StripePayments handleToken={this.props.handleToken} />
            </li>
            <li>Credits: {this.props.auth.credits}</li>
            <li>
              <a href="/auth/logout">logout</a>
            </li>
          </Fragment>
        );
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="dasdsad" className="brand-logo left">
            Emailator
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

export default connect(mapsStateToProps, mapActionToDispatch)(Header);
