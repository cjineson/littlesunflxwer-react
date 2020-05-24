import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../../constants/stripe';
import PAYMENT_SERVER_URL from '../../constants/server';

const CURRENCY = 'GBP';

const poundsToPence = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: poundsToPence(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, email, description, amount }) =>
  <StripeCheckout
    name={name}
    email={email}
    zipCode={"abc"}
    description={description}
    amount={poundsToPence(amount)}
    allowRememberMe={false}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout;