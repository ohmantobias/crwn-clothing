import React from "react";

import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KVx7NGcYqGbpxzVb9l6dpPdqC91oZ12dR9tkDJRJFIgd9M5CjBT54ZiVEVuG9IspYlQJWeoqbBI5YR9yWhhuJfg00SZfDSmR3";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("payment succesfull");
      })
      .catch((error) => {
        console.log("payment error: ", JSON.parse(error));
        alert(
          "there was an issue with your payment. please make sure you use the provided credit card"
        );
      });
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
