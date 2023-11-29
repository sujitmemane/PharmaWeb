import React from 'react'
import { Main_Service_Data } from './data'

const MainServices = () => {
  return (
    <div className="px-4 lg:px-14   my-12 max-w-screen mx-auto" id='service'>
        <h1 className="text-center text-xl  text-brandPrimary font-bold uppercase tracking-tight">
        Our Services
      </h1>
      <p className="text-center text-2xl font-thin mb-8">
    
      What We Delivers?
      </p>
    <div className="grid md:grid-cols-3 grid-cols-1   text-black py-12  p-6 space-y-4 rounded gap-8 justify-between md:space-y-0   ">
      {Main_Service_Data.map((item) => (
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
  )
}

export default MainServices