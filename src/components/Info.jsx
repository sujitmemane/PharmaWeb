import React from "react";
import { Info_Data } from "./data";

const Info = () => {
  return (
    <div className="w-full hidden md:flex  bg-brandPrimary px-4 lg:px-14 py-3 ">
      <div className="flex items-center justify-end w-full space-x-6 text-white">
        {Info_Data.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            {item.icon}
            <p className="font-thin">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
