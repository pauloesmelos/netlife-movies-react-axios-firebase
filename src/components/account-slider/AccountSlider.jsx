import React from "react";
import Item from "./item/Item";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const AccountSlider = ({ savedMovies }) => {
  const slider = React.useRef();
  const value = 300;

  const prev = () => {
    if(slider.current) {
      slider.current.scrollLeft -= value;
    }
  }
  const next = () => {
    if(slider.current) {
      slider.current.scrollLeft += value;
    }
  }

  return (
    <div className="w-full relative group">
      {/* slider */}
      <div ref={slider} className="w-full no-scroll whitespace-nowrap scroll-smooth overflow-hidden">
        {savedMovies?.map((movie, index) => (
          <Item key={index * Math.random()} movie={movie} />
        ))}
      </div>
      {/* controls */}
      <div className="hidden group-hover:block">
        <IoIosArrowBack 
          onClick={prev}
          className="absolute top-[35%] left-2 text-black p-1 bg-gray-500
          hover:bg-white rounded-full cursor-pointer duration-200 text-3xl sm:text-4xl lg:text-5xl" 
        />
        <IoIosArrowForward
          onClick={next}
          className="absolute top-[35%] right-0 text-black p-1 bg-gray-500
          hover:bg-white rounded-full cursor-pointer duration-200 text-3xl sm:text-4xl lg:text-5xl" 
        />
      </div>
    </div>
  );
};

export default AccountSlider;