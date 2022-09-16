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
      </div>
    </section>
  );
};
export default LeftFilter;
