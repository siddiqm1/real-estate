import React from "react";

const Filter = () => {
  return (
    <div className="pr-5 box-border">
      <div className="w-full">
        <h1 className="text-lg lg:text-2xl">Search result for</h1>
        <div className="flex flex-col">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="City Location"
            className="w-full px-4 py-2 border border-slate-300 rounded"
          />
        </div>
      </div>
      <div className="w-full flex gap-2">
        <div className="">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" className="w-28 px-4 py-2 border border-slate-300 rounded text-sm">
            <option value="any" key="any">
              any
            </option>
            <option value="buy" key="buy">
              buy
            </option>
            <option value="rent" key="rent">
              rent
            </option>
          </select>
        </div>

        <div className="">
          <label htmlFor="property">Property</label>
          <select name="property" id="property" className="w-28 px-4 py-2 border border-slate-300 rounded text-sm">
            <option value="any" key="any">
              any
            </option>
            <option value="apartment" key="apartment">
              apartment
            </option>
            <option value="house" key="house">
              house
            </option>
            <option value="condo" key="condo">
              condo
            </option>
            <option value="land" key="land">
              land
            </option>
          </select>
        </div>

        <div className="">
          <label htmlFor="minPrice">MinPrice</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            className="w-28 px-4 py-2 border border-slate-300 rounded text-sm"
          />
        </div>

        <div className="">
          <label htmlFor="maxPrice">MaxPrice</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            className="w-28 px-4 py-2 border border-slate-300 rounded text-sm"
          />
        </div>

        <div className="">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="any" className="w-28 px-4 py-2 border border-slate-300 rounded text-sm" />
        </div>
        <button className="bg-yellow-300 px-5 w-full h-14 lg:w-28 mt-2 rounded">
          <img src="/search.png" alt="tombol" className="w-6 lg:w-5 mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
