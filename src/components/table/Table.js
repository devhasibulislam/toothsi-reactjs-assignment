import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto shadow">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Color</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Buy</th>
              </tr>
            </thead>
            <tbody>
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default Table;
