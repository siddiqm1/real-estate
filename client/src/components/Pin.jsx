import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-5 min-w-[200px]">
          <img src={item.img} alt="..." className="w-16 h-16 object-cover rounded-sm" />
          <div className="flex flex-col">
            <Link to={"/"}>{item.title}</Link>
            <p>{item.bedroom} bedroom</p>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
