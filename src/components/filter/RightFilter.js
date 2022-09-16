import React from "react";
import { useNavigate } from "react-router-dom";

const RightFilter = ({ setKeyword }) => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex lg:flex-row md:flex-row flex-col gap-x-4 lg:gap-y-0 md:gap-y-0 gap-y-4">
        {/* search filter */}
        <div className="flex items-center gap-x-2">
          <span className="font-medium lg:block md:block hidden">Search:</span>
          <input
            type="text"
            placeholder="Enter product name"
            className="input input-bordered rounded-sm input-md max-w-xs"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        {/* add to cart */}
        <div className="text-center">
          <button
            className="btn text-white px-8 bg-[#00a0c0] border-0 rounded-sm"
            onClick={() => navigate("/checkout")}
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};
export default RightFilter;
