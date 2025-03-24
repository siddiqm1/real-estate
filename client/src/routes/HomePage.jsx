import React from "react";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-[100%] w-full">
      <div className="flex-[3]">
        <div className="h-full flex flex-col justify-center gap-16 md:gap-12 lg:pr-[44px] w-full">
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-semibold">Find Real Estate & Get Your Dream Place</h1>
          <p className="text-sm max-w-[350px] text-justify sm:text-lg sm:max-w-2xl lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            optio quo veniam adipisci facere, eaque reprehenderit consequatur
            ipsam autem quis voluptatibus tenetur, ullam est ratione doloribus.
            Soluta accusantium tempore optio.
          </p>

          <SearchBar />
          
          <div className="flex w-full gap-15 sm:justify-center lg:gap-30 mb-12">
            <div className="flex flex-col items-center">
                <h1 className="text-xl lg:text-2xl font-semibold">16+</h1>
                <h3 className="text-sm lg:text-md xl:text-lg capitalize text-slate-500">years of experience</h3>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-xl lg:text-2xl font-semibold">200</h1>
                <h3 className="text-sm lg:text-md xl:text-lg capitalize text-slate-500">award gained</h3>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-xl lg:text-2xl font-semibold">1200+</h1>
                <h3 className="text-sm lg:text-md xl:text-lg capitalize text-slate-500">property ready</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2] lg:bg-[#fcf5fd] relative items-center hidden lg:flex">
        <img src="/bg.png" alt="background" className="w-full absolute" />
      </div>
    </div>
  );
};

export default HomePage;
