import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';

const key = process.env.REACT_APP_STRIPE_KEY;

class Payments extends Component {
  render() {
    console.log(key);
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 survey credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={key}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);