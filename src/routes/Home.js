import React from "react";
import { useState } from "react";
import Filter from "../components/filter/Filter";
import Table from "../components/table/Table";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState([]);

  return (
    <section>
      <Filter setKeyword={setKeyword} setFilter={setFilter} />
      <Table keyword={keyword} filter={filter} />
    </section>
  );
};
export default Home;
