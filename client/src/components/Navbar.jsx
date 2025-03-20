import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center h-[100px]">
      <div className="flex items-center flex-[3] gap-10">
        <a
          href=""
          className="flex items-center gap-1.5  transition-all hover:scale-[1.05]"
        >
          <img src="/logo.png" alt="logo" className="w-9" />
          <span className="text-xl font-bold md:hidden lg:inline">
            Homestate
          </span>
        </a>
        <div className="gap-10 items-center hidden md:flex">
          <a href="" className="transition-all hover:scale-[1.05]">
            Home
          </a>
          <a href="" className="transition-all hover:scale-[1.05]">
            About
          </a>
          <a href="" className="transition-all hover:scale-[1.05]">
            Contact
          </a>
          <a href="" className="transition-all hover:scale-[1.05]">
            Agents
          </a>
        </div>
      </div>
      <div className="flex-[2] h-[100%] items-center flex justify-end md:bg-transparent lg:bg-[#fcf5fd]">
        <div className="hidden md:flex items-center gap-10 px-3">
          <a href="" className="transition-all hover:scale-[1.05]">
            Sign in
          </a>
          <a
            href=""
            className="transition-all hover:scale-[1.05] px-4 py-2 bg-yellow-300 rounded-xl"
          >
            Sign up
          </a>
        </div>
        <div
          className="w-8 h-8 md:hidden cursor-pointer z-10"
          onClick={() => setOpen((prev) => !prev)}
        >
          <img src="/menu.png" alt="menu" />
        </div>
        <div
          className={`absolute bg-slate-900 text-white h-screen w-[50%] top-0 transition-all ease-in-out duration-800 flex flex-col justify-center items-center md:hidden gap-10 ${
            open ? "right-0" : "right-[-50%]"
          }`}
        >
          <a href="" className="transition-all hover:scale-[1.05]">
            Home
          </a>
          <a href="" className="transition-all hover:scale-[1.05]">
            About
          </a>
          <a href="" className="transition-all hover:scale-[1.05]">
            Contact
          </a>
          <a href="" className="transition-all hover:scale-[1.05]">
            Agents
          </a>
          <a href="" className="transition-all hover:scale-[1.05]">
            Sign in
          </a>
          <a href="" className="transition-all hover:scale-[1.05]">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
