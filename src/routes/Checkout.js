import React from "react";
import CheckoutLeft from "../components/checkout/CheckoutLeft";
import CheckoutRight from "../components/checkout/CheckoutRight";

const Checkout = () => {
  return (
    <section className="py-4 lg:px-0 md:px-0 px-4">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-between lg:gap-x-4 gap-y-4">
          <CheckoutLeft />
          <CheckoutRight />
        </div>
      </div>
    </section>
  );
};
export default Checkout;
