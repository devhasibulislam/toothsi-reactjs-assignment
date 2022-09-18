import React from "react";
import { useState } from "react";
import Filter from "../components/filter/Filter";
import Table from "../components/table/Table";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState([]);
  const [selectMultipleProducts, setSelectMultipleProducts] = useState([]);

  return (
    <section>
      <Filter setKeyword={setKeyword} setFilter={setFilter} selectMultipleProducts={selectMultipleProducts} />
      <Table keyword={keyword} filter={filter} selectMultipleProducts={selectMultipleProducts} setSelectMultipleProducts={setSelectMultipleProducts} />
    </section>
  );
};
export default Home;
