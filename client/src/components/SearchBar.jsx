import React, { useState } from "react";

const SearchBar = () => {
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const setSwitchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="">
      <div className="">
        {types.map((type) => {
          return (
            <button
              key={type}
              className={`px-8 py-3 border border-slate-200 cursor-pointer capitalize 
                ${type === "buy" ? "rounded-tl-lg border-r-0" : ""}
                ${type === "rent" ? "rounded-tr-lg border-l-0" : ""}
                ${query.type === type ? "text-white bg-slate-950" : "bg-white"}
              `}
              onClick={() => setSwitchType(type)}
            >
              {type}
            </button>
          );
        })}
      </div>
      <form className="border border-slate-200 flex justify-between items-center h-15 w-full">
        <input type="text" name="location" placeholder="City location" className="px-4 h-full" />
        <input
          type="number"
          name="minPrice"
          placeholder="Min price"
          min={0}
          max={100000000}
          className="px-4 h-full"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max price"
          min={0}
          max={100000000}
          className="px-4 h-full"
        />
        <button className="bg-yellow-300 px-5 h-full">
          <img src="/search.png" alt="tombol" className="w-5" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
