import React from "react";
import { MdOutlineLocalMovies } from "react-icons/md";

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
        <button className="px-6 py-2 text-white rounded bg-red-600 hover:opacity-80 duration-200 uppercase">
          Subscribed Netlife
        </button>
      </div>
    </div>
  )
}

export default Promotion;