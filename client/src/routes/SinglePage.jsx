import React from "react";
import Slider from "../components/Slider";

const SinglePage = () => {
  return (
    <div className="flex h-full">
      <div className="flex-[3]">
        <div className="pr-18">
          <Slider />
          <div className="">
            <div className="flex justify-between">
              <div className="">
                <p>title</p>
                <p>address</p>
                <p>price</p>
              </div>
              <div className="">
                <p>foto profile</p>
                <p>nama user</p>
              </div>
            </div>
            <div className="">
              <p>paragraf konten</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2] bg-[#fcf5fd]">
        <p>general</p>
      </div>
    </div>
  );
};

export default SinglePage;
