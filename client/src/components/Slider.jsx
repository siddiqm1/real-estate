import React from "react";

const Slider = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[300px]">
      <div className="col-span-2 row-span-3">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg"
          alt=""
        />
      </div>
      <div className="col-start-3 row-start-1">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg"
          alt=""
        />
      </div>
      <div className="col-start-3 row-start-2">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg"
          alt=""
        />
      </div>
      <div className="col-start-3 row-start-3">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slider;
