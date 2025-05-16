import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen w-full 2xl:max-w-[1366px] mx-auto px-6 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl font-poppins">
      <div className="">
        <Navbar />
      </div>
      <div className="h-[calc(100vh-100px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
