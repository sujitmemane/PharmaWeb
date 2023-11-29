import React from "react";
import { Carousel } from "flowbite-react";
import Slider1 from "../assets/slider1.jpg";

const Hero = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 min-h-screen h-screen max-w-screen mx-auto">
        <Carousel className="w-full mx-auto">
          <div className="h-full my-28 px-4   md:my-8 flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="md:w-1/2 p-8">
              <img src={Slider1} className="h-full w-full" alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-4 text-neutralDGray md:w-3/4 ">
                Personal Care For Your{" "}
                <span className="text-brandPrimary">Healthy Living</span>
              </h1>
              <p className="text-neutralGray text-base mb-8">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <button
                className={` 
                   bg-brandPrimary text-white
                font-normal
               px-8 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105`}
              >
                Register
              </button>
            </div>
          </div>
          <div className="h-full my-28 px-4   md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="md:w-1/2 p-8">
              <img src={Slider1} className="h-full w-full" alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-4 text-neutralDGray md:w-3/4 ">
                Personal Care For Your{" "}
                <span className="text-brandPrimary">Healthy Living</span>
              </h1>
              <p className="text-neutralGray text-base mb-8">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <button
                className={` 
                   bg-brandPrimary text-white
                font-normal
               px-8 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105`}
              >
                Register
              </button>
            </div>
          </div>
          <div className="h-full my-28 px-4   md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="md:w-1/2 p-8">
              <img src={Slider1} className="h-full w-full" alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-4 text-neutralDGray md:w-3/4 ">
                Personal Care For Your{" "}
                <span className="text-brandPrimary">Healthy Living</span>
              </h1>
              <p className="text-neutralGray text-base mb-8">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <button
                className={` 
                   bg-brandPrimary text-white
                font-normal
               px-8 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105`}
              >
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
