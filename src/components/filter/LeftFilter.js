import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const LeftFilter = ({ setFilter }) => {
  const [category, setCategory] = useState("Category");
  const [size, setSize] = useState("Size");

  useEffect(() => {
    setFilter([category, size]);
  }, [category, size, setFilter]);

  return (
    <section>
      <div className="flex gap-x-4">
        {/* choose category */}
        <div>
          <select
            className="select select-bordered select-sm w-full max-w-xs rounded-sm"
            onChange={(e) => setCategory(e.target.value)}
            defaultValue={category}
            value={category}
          >
            <option value={category} disabled selected>
              {category}
            </option>
            <option value={"apparel"}>Apparel</option>
            <option value={"footwear"}>Footwear</option>
            <option value={"sportswear"}>Sportswear</option>
            <option value={"traditional"}>Traditional</option>
            <option value={"fabric"}>Fabric</option>
            <option value={"haute"}>Haute</option>
          </select>
        </div>

        {/* choose size */}
        <div>
          <select
            className="select select-bordered select-sm w-full max-w-xs rounded-sm"
            onChange={(e) => setSize(e.target.value)}
            defaultValue={size}
            value={size}
          >
            <option value={size} disabled selected>
              {size}
            </option>
            <option value={"XL"}>XL</option>
            <option value={"L"}>L</option>
            <option value={"M"}>M</option>
            <option value={"S"}>S</option>
          </select>
        </div>

        {/* reset button */}
        <button
          className="btn btn-sm text-[#009ebe] rounded-sm flex gap-x-2 bg-white"
          onClick={() => {
            setCategory("Category");
            setSize("Size");
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </span>
          <span>Reset</span>
        </button>
      </div>
    </section>
  );
};
export default LeftFilter;
