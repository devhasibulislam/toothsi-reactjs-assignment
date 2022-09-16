import React from "react";

const RightFilter = () => {
  return (
    <section>
      <div className="flex gap-x-4">
        {/* search filter */}
        <div className="flex items-center gap-x-2">
          <span className="font-medium">Search:</span>
          <input
            type="text"
            placeholder="Enter product name"
            className="input input-bordered rounded-sm input-md max-w-xs"
          />
        </div>

        {/* add to cart */}
        <div>
          <button className="btn text-white px-8 bg-[#00a0c0] border-0 rounded-sm">Add to cart</button>
        </div>
      </div>
    </section>
  );
};
export default RightFilter;
