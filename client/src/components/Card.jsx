import React from "react";
import { Link } from "react-router";

const Card = ({ item }) => {
  return (
    <div className="flex gap-4">
      {/* Kiri */}
      <Link to={`/${item.id}`} className="flex-[2] h-52">
        <img
          src={item.img}
          alt={item.address}
          className="w-full object-cover h-full rounded-xl"
        />
      </Link>

      {/* Kanan */}
      <div className="flex-[3] flex flex-col justify-between">
        <Link
          to={`/${item.id}`}
          className="lg:text-lg hover:font-bold hover:scale-[1.01] transition-all ease-in-out duration-500"
        >
          {item.title}
        </Link>
        <div className="w-full h-10 flex gap-1">
          <img src="/pin.png" alt="address" className="w-5 h-5" />
          <p className="text-slate-600">{item.address}</p>
        </div>
        <div className="bg-[#FECD5170] w-fit px-2 py-1 rounded">
          <p className="lg:text-xl">${item.price}</p>
        </div>
        <div className="flex gap-5 w-full">
          <div className="flex w-full flex-[3] gap-4">
            <div className="w-fit flex gap-1 bg-slate-300 justify-center items-center px-2 py-1 rounded">
              <img src="/bed.png" alt="bedroom" className="w-5 h-5" />
              <p className="text-sm">{item.bedroom} bedroom</p>
            </div>
            <div className="w-fit flex gap-1 bg-slate-300 justify-center items-center px-2 py-1 rounded">
              <img src="/bath.png" alt="bathroom" className="w-5 h-5" />
              <p className="text-sm">{item.bathroom} bathroom</p>
            </div>
          </div>
          <div className="w-full flex flex-[1] gap-4">
            <div className="w-fit border border-slate-500 p-1 rounded">
              <img src="/save.png" alt="save" className="w-5 h-5" />
            </div>
            <div className="w-fit border border-slate-500 p-1 rounded">
              <img src="/chat.png" alt="chat" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
