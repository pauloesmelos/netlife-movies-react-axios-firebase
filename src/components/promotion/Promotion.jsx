import React from "react";
import { MdOutlineLocalMovies } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Promotion = () => {
  return (
    <div className="p-2 bg-[#333] shadow-lg shadow-black flex justify-between items-center px-8 absolute 
    bottom-[-2rem] w-full max-w-[90%] lg:max-w-[1200px]">
      <div className="flex gap-5 items-center">
        <MdOutlineLocalMovies 
          className="text-red-600 text-4xl" 
        />
        <p className="text-white font-semibold hidden sm:block">
          Watch now Movies and TV Shows.
        </p>
      </div>
      <div>
        <NavLink 
          className="px-2 sm:px-6 sm:py-2 py-1 text-white rounded bg-red-600 hover:opacity-80 
          duration-200 uppercase sm:text-sm lg:text-lg"
          to={"/signup"}
        >
          Subscribed Netlife
        </NavLink>
      </div>
    </div>
  )
}

export default Promotion;