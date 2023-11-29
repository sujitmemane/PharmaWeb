import { useState } from "react";
import { testimonials } from "./data";
import { Carousel } from "flowbite-react";

export default () => {
  return (
    <section className="py-24 my-24 " id="testinomial">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-center text-xl  text-brandPrimary font-bold uppercase tracking-tight">
            TESTINOMIALS
          </h1>
          <p className="text-center text-2xl font-thin mb-4">
            What Other People Are Saying?
          </p>
          <div className="h-96  sm:h-64 xl:h-80 2xl:h-96"> 
          <Carousel className="">
            {testimonials.map((item, idx) => (
                <li key={idx} className=" flex h-full items-center justify-center">
                  <figure>
                    <blockquote>
                      <p className="text-neutralDGrey text-xl font-thin sm:text-2xl">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 mx-auto rounded-full"
                      />
                      <div className="mt-3">
                        <span className="block text-gray-800 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
                
              ))}
           
          </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
