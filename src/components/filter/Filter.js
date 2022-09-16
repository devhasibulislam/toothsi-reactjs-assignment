import React from "react";
import LeftFilter from "./LeftFilter";
import RightFilter from "./RightFilter";

const Filter = () => {
  return (
    <section className="shadow-lg py-4">
      <div className="flex justify-between items-center container mx-auto">
        {/* header left */}
        <LeftFilter />

        {/* header right */}
        <RightFilter />
      </div>
    </section>
  );
};
export default Filter;
