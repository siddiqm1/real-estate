import React from "react";
import Filter from "../components/Filter";
import { listData } from "../lib/dummy";
import Card from "../components/Card";
import Map from "../components/Map";

const ListPage = () => {
  const data = listData;

  return (
    <div className="flex h-[100%]">
      {/* List */}
      <div className="flex-[3] h-[100%]">
        <div className="flex-1 h-[100%] overflow-y-scroll pr-5 py-5 flex flex-col gap-10 pb-10">
        <Filter />
          {data.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
      
      {/* map */}
      <div className="flex-[2] bg-[#fcf5fd] w-full h-full">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
