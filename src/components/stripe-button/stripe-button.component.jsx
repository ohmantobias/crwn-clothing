import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KVx7NGcYqGbpxzVb9l6dpPdqC91oZ12dR9tkDJRJFIgd9M5CjBT54ZiVEVuG9IspYlQJWeoqbBI5YR9yWhhuJfg00SZfDSmR3";

  const onToken = (token) => {
    console.log(token);
    alert("Payment succesfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
