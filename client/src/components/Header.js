import React, { Fragment } from 'react';
import StripePayments from './StripePayment';

const Header = ({ user, handleToken }) => {
  
  const renderContent = () => {
    switch (user) {
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
              <StripePayments handleToken={handleToken} />
            </li>
            <li>Credits: {user.credits}</li>
            <li>
              <a href="/auth/logout">logout</a>
            </li>
          </Fragment>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="dasdsad" className="brand-logo left">
          Emailator
        </a>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

export default Header;
