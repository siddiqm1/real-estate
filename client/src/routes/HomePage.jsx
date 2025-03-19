import React from "react";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div className="flex h-[100%]">
      <div className="flex-[3]">
        <div className="h-full flex flex-col justify-center gap-10 pr-20">
          <h1 className="lg:text-3xl xl:text-5xl font-semibold">Find Real Estate & Get Your Dream Place</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            optio quo veniam adipisci facere, eaque reprehenderit consequatur
            ipsam autem quis voluptatibus tenetur, ullam est ratione doloribus.
            Soluta accusantium tempore optio.
          </p>

            <SearchBar />
          
          <div className="flex gap-15">
            <div className="flex flex-col items-center">
                <h1 className="lg:text-2xl font-semibold">16+</h1>
                <h3 className="capitalize text-slate-500">years of experience</h3>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="lg:text-2xl font-semibold">200</h1>
                <h3 className="capitalize text-slate-500">award gained</h3>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="lg:text-2xl font-semibold">1200+</h1>
                <h3 className="capitalize text-slate-500">property ready</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2] flex lg:bg-[#fcf5fd] relative items-center">
        <img src="/bg.png" alt="background" className="w-full absolute" />
      </div>
    </div>
  );
};

export default HomePage;
