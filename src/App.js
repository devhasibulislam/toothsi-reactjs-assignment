/**
 * Title: Product listing page
 * Description: The idea is to create a Product Listing page and cart (checkout) summary page of an ecommerce website which has certain functionalities.
 * Author: Hasibul Islam
 * Date: 16/09/2022
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "./routes/Checkout";
import Greetings from "./routes/Greetings";
import Home from "./routes/Home";

function App() {
  return (
    <section className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tysm" element={<Greetings />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </section>
  );
}
export default App;
