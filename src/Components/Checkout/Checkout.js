// @noflow

import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadStripe } from '@stripe/stripe-js';
import Dialog from "@material-ui/core/Dialog";
import { showPayDialog } from "../../Redux/Actions";
import TextField from "@material-ui/core/TextField";
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    Elements,
    ElementsConsumer,
  } from '@stripe/react-stripe-js';
  
  const handleBlur = () => {
    console.log('[blur]');
  };
  const handleChange = (change) => {
    console.log('[change]', change);
  };
//   const handleClick = () => {
//     console.log('[click]');
//   };
  const handleFocus = () => {
    console.log('[focus]');
  };
  const handleReady = () => {
    console.log('[ready]');
  };

const mapStateToProps = state => {
    return { open: state.showPayDialog };
};

const createOptions = (fontSize: string, padding: ?string) => {
    return {
        style: {
            base: {
                fontSize,
                color: '#424770',
                letterSpacing: '0.025em',
                fontFamily: 'Source Code Pro, monospace',
                '::placeholder': {
                    color: '#aab7c4',
                },
                ...(padding ? { padding } : {}),
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };
};

class CheckoutForm extends React.Component {

    handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        console.log(this.props);
        const { stripe, elements } = this.props;

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        
        // const cardNumberElement = elements.getElement(CardNumberElement);
        // const cardExpiryElement = elements.getElement(CardExpiryElement);
        // const cardCvcElement = elements.getElement(CardCvcElement);

        // const { error, paymentMethod } = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: cardNumberElement,
        // });

        (async () => {
            const response = await fetch('http://localhost:4242/create-payment-intent');
            const resp = await response.json();
            console.log(resp);
          })();

        // const result = await stripe.confirmCardPayment(resp, {
        //     payment_method: {
        //       card: elements.getElement(CardElement),
        //       billing_details: {
        //         name: 'Jenny Rosen',
        //       },
        //     }
        //   });
      
        //   if (result.error) {
        //     // Show error to your customer (e.g., insufficient funds)
        //     console.log(result.error.message);
        //   } else {
        //     // The payment has been processed!
        //     if (result.paymentIntent.status === 'succeeded') {
        //       // Show a success message to your customer
        //       // There's a risk of the customer closing the window before callback
        //       // execution. Set up a webhook or plugin to listen for the
        //       // payment_intent.succeeded event that handles any business critical
        //       // post-payment actions.
        //     }
        //   }
    };

    render() {
        const { stripe, open } = this.props;
        return (
            <Dialog
                open={open}
                onClose={() => {
                    this.props.dispatch(showPayDialog(false));
                }}
            >
                        <TextField
                            placeholder="Name"
                            onChange={e => {
                                //   this.props.dispatch(customerName(e.target.value));
                            }}
                        />
                        <TextField
                            placeholder="Address Line1"
                            onChange={e => {
                                //   this.props.dispatch(customerName(e.target.value));
                            }}
                            style={{ width: 700 }}
                        />
                            <label>
                                Card number
          <CardNumberElement
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onReady={handleReady}
                                    {...createOptions(this.props.fontSize)}
                                />
                            </label>
                            <label>
                                Expiration date
          <CardExpiryElement
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onReady={handleReady}
                                    {...createOptions(this.props.fontSize)}
                                />
                            </label>
                            <label>
                                CVC
          <CardCvcElement
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onReady={handleReady}
                                    {...createOptions(this.props.fontSize)}
                                />
                            </label>
                            <button onClick={this.handleSubmit} disabled={!stripe}>
                                Pay
                            </button>>
                </Dialog>
        );
    }
}

const InjectedCheckoutForm = (props) => {
    return (
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <CheckoutForm elements={elements} stripe={stripe} open={props.open} dispatch={props.dispatch} />
                    )}
                </ElementsConsumer>
    );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_Cx8DmspqU6McP8f5sOTOVH6S00IMVF7GEj');

const CheckoutDialog = (props) => {
    return (
                <Elements stripe={stripePromise}>
                    <InjectedCheckoutForm open={props.open} dispatch={props.dispatch} />
                </Elements>
    );
};

const Checkout = withRouter(connect(mapStateToProps)(CheckoutDialog));
export default Checkout;