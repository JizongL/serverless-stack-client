import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API } from "aws-amplify";
import { onError } from "../libs/errorLib";
import config from "../config";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import "./Settings.css";
export default function Settings() {
  const [stripe, setStripe] = useState(null);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setStripe(window.Stripe(config.STRIPE_KEY));
  }, []);

  async function handleFormSubmit(storage, { token, error }) {
    if (error) {
      onError(error);
      return;
    }
    console.log(token, "test token");
    setIsLoading(true);
    try {
      await billUser({
        storage,
        source: token.id,
      });
      alert("Your card has been charged successfully!");
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  function billUser(details) {
    console.log(details, "test details");
    return API.post("notes", "/billing", {
      body: details,
    });
  }
  return (
    <div className={Settings}>
      {" "}
      <StripeProvider stripe={stripe}>
        <Elements>
          <BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
        </Elements>
      </StripeProvider>
    </div>
  );
}
