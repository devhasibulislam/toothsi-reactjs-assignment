import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto shadow">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <TableHeader />
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
