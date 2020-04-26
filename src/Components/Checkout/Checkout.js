// @noflow

import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import Dialog from "@material-ui/core/Dialog";
import { showPayDialog } from "../../Redux/Actions";


const mapStateToProps = state => {
    return { open: state.showPayDialog };
  };
  
class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
console.log(this.props);
    const {stripe, elements, open} = this.props;

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  render() {
    const {stripe, open} = this.props;
    console.log(open)
    return (
        <div>
        <Dialog
          open={open}
          onClose={() => {
            this.props.dispatch(showPayDialog(false));
          }}
        >
            <form onSubmit={this.handleSubmit}>
                <CardElement
                options={{
                    style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                        color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                    },
                }}
                />
                <button type="submit" disabled={!stripe}>
                Pay
                </button>
          </form>
          </Dialog>
      </div>
    );
  }
}

const InjectedCheckoutForm = (props) => {
  return (
    <ElementsConsumer>
      {({elements, stripe, open}) => (
        <CheckoutForm elements={elements} stripe={stripe} open={props.open} />
      )}
    </ElementsConsumer>
  );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const CheckoutDialog = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <InjectedCheckoutForm open={props.open}/>
    </Elements>
  );
};

const Checkout = withRouter(connect(mapStateToProps)(CheckoutDialog));
export default Checkout;