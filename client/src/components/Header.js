import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapsStateToProps } from '../data/module/auth';

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
          <li>
            <a href="/auth/logout">logout</a>
          </li>
        );
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="dasdsad" className="brand-logo">
            Logo
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

export default connect(mapsStateToProps)(Header);
