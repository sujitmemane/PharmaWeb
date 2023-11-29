import React from "react";
import { Team_Data } from "./data";

const Team = () => {
  return (
    <div className="px-4 lg:px-14  my-12 max-w-screen mx-auto">
      <h1 className="text-center text-xl  text-brandPrimary font-bold uppercase tracking-tight">
        Meet Our Specialist
      </h1>
      <p className="text-center text-2xl font-thin mb-8">
        {" "}
        The Team Which Makes Everything Possible
      </p>
      <div>
        <div className="flex   text-black py-12 flex-col p-6 space-y-4 rounded md:flex-row justify-center md:space-y-0 items-center   ">
          {Team_Data.map((item) => {
            return (
              <div className="profile-card">
                <img src={item.img} alt="image1" className="profile-icon" />
                <div className="profile-name">{item.name}</div>
                <div className="profile-position">{item.position}</div>
                <a href={item.connect} target="_blank" className="button">
                  Connect
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
