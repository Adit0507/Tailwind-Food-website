import React from "react";
import { data } from "../data/data";

const Food = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

      {/* Filtering Row  */}
      <div>
        {/* Filter type */}
        <div>
          <p>Filter Type</p>
          <div>
            <button>All</button>
            <button>Burgers</button>
            <button>Pizza</button>
            <button>Salads</button>
            <button>Chicken</button>
          </div>
        </div>

        {/* Filtering price */}
        <div>
          <p>Filter Price</p>
          <div>
            <button>₹</button>
            <button>₹₹</button>
            <button>₹₹₹</button>
            <button>₹₹₹₹</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
