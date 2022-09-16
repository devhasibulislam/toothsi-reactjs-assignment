/**
 * Title: Product listing page
 * Description: The idea is to create a Product Listing page and cart (checkout) summary page of an ecommerce website which has certain functionalities.
 * Author: Hasibul Islam
 * Date: 16/09/2022
 */

import "./App.css";
import Filter from "./components/filter/Filter";
import Table from "./components/table/Table";

function App() {
  return (
    <section className="App">
      <Filter />
      <Table />
    </section>
  );
}
export default App;
