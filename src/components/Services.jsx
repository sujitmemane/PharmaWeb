import React from "react";
import { Service_Data } from "./data";

const Services = () => {
  return (
    <div className="px-4 lg:px-14  my-12 max-w-screen mx-auto">
      <div className="flex   text-black py-12 flex-col p-6 space-y-4 rounded md:flex-row justify-between md:space-y-0   ">
        {Service_Data.map((item) => (
          <div
            key={item.id}
            className={`max-w-md  flex flex-col items-center space-y-2  p-8 py-20 cursor-pointer   text-center ${item.special ? "bg-brandPrimary  text-white opacity-100 " : "  bg-[#f2f4f3]  hover:bg-brandPrimary hover:text-white group "} `}
          >
            <p className={`text-brandPrimary  ${item.special?"text-white":"group-hover:text-white"}`}>
              {item.icon}
            </p>
            <h2 className={`text-3xl font-bold text-neutralDGray`}>
              {item.title}
            </h2>
            <p className="text-md   group-hover:opacity-100">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
