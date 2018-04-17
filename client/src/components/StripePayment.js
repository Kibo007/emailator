import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripePayments = props => {
  return (
    <StripeCheckout
      token={props.handleToken}
      amount={500}
      name="Emailator"
      description="5 euro for 5 credits"
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
    >
      <button className="btn">Add credits</button>
    </StripeCheckout>
  );
};

export default StripePayments;
