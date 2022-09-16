import React from "react";

const LeftFilter = () => {
  return (
    <section>
      <div className="flex gap-x-4">
        {/* choose category */}
        <div>
          <select class="select select-bordered select-sm w-full max-w-xs rounded-sm">
            <option disabled selected>
              Categories
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
          <select class="select select-bordered select-sm w-full max-w-xs rounded-sm">
            <option disabled selected>
              Sizes
            </option>
            <option value={"XL"}>XL</option>
            <option value={"L"}>L</option>
            <option value={"M"}>M</option>
            <option value={"S"}>S</option>
          </select>
        </div>

        {/* reset button */}
        <button class="btn btn-sm text-[#009ebe] rounded-sm flex gap-x-2 bg-white">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
