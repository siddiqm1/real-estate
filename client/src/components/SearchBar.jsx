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
      <form className="w-full border border-slate-200 flex flex-col h-fit lg:gap-0 lg:flex lg:flex-row lg:justify-between lg:items-center lg:h-12 xl:h-15">
        <input
          type="text"
          name="location"
          placeholder="City location"
          className="w-full h-14 px-3 lg:px-2 xl:px-4 lg:h-full border border-slate-200"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min price"
          min={0}
          max={100000000}
          className="w-full h-14 px-3 border border-slate-200 lg:px-2 xl:px-4 lg:h-full"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max price"
          min={0}
          max={100000000}
          className="w-full h-14 px-3 border border-slate-200 lg:px-2 xl:px-4 lg:h-full"
        />
        <button className="bg-yellow-300 px-5 w-full h-10 lg:w-30 lg:h-full">
          <img src="/search.png" alt="tombol" className="w-6 lg:w-5 mx-auto" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
