import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useGetMovies from '../../hooks/api/getMovies/useGetMovies';
import Card from './card/Card';

const CategorySlider = ({ title, url }) => {
  const { movies } = useGetMovies(url, title); /* é preciso identificar cada query com algum id para não retornar sempre o msm result */
  
  const slider = React.useRef();

  const next = () => {
    slider.current.scrollLeft += 350;
  }
  const previuos = () => {
    slider.current.scrollLeft -= 350;
  }

  return (
    <div className="px-4 w-full my-5 sm:my-16">
      <div className="w-full relative">
        <div>
            <h3 className="text-white  text-2xl sm:text-3xl font-bold capitalize my-4">
              {title}
            </h3>
        </div>
        <div className="w-full group">
          <div 
            ref={slider}
            className="whitespace-nowrap w-full scroll-smooth no-scroll overflow-hidden">
              { movies?.results.map((movie, index) => (
                  <Card
                    key={index * Math.random()}
                    movie={movie} 
                  />
              ))}
          </div>
          <div className="w-full z-30">
            <IoIosArrowBack
              className="text-black bg-gray-400 hover:bg-white rounded-full absolute top-[50%] left-1 sm:left-2 
              text-3xl sm:text-4xl cursor-pointer p-1 duration-200"
              onClick={previuos}
            />
            <IoIosArrowForward 
              className="text-black bg-gray-400 hover:bg-white rounded-full absolute top-[50%] right-0 sm:right-5 
              text-3xl sm:text-4xl cursor-pointer p-1 duration-200"
              onClick={next}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategorySlider;