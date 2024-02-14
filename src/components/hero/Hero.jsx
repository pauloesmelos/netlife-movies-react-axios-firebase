import React from "react";
import { routesMovie } from "../../api/api.js";
import useGetMovies from "../../hooks/api/getMovies/useGetMovies";

const Hero = () => {
  const url = routesMovie.popular;
  const pathImg = import.meta.env.VITE_APP_API_PATH_IMAGE;
  const { movies, isError, isLoading } = useGetMovies(url);
  const [randomMovie, setRandomMovie] = React.useState({});

  React.useEffect(() => {
    const index = Math.ceil(Math.random() * movies?.results.length) || 0; // random index
    setRandomMovie(movies?.results[index]);
  } ,[movies]);

  const maxOverview = (text, limit) => { // limitando text
    const newText = text?.split(" ").slice(0, limit).join(" ");
    return text?.length && limit > 0 ? newText?.concat("...") : "";
  }
  if(isLoading) return null;
  return (
    <div className="w-full h-[580px] relative">
      <div className="w-full h-full">
        {/* image */}
        <img
          src={`${pathImg}${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
          title={randomMovie?.title}
          className="w-full h-full object-cover"
        />
        {/* overlay */}
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/80 to-black/10" />
        {/* infos and buttons */}
        <div className="flex gap-3 absolute top-0 left-0  flex-col justify-center w-full h-full px-7">
            <h2 className="text-white font-bold text-3xl sm:text-4xl cursor-pointer">
                {randomMovie?.title}
            </h2>
            <div className="flex items-center gap-5 my-5">
              <button 
                className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-black font-semibold border
                hover:text-white hover:bg-black duration-300"
                onClick={() => console.log(randomMovie)}
              >
                Play
              </button>
              <button className="px-7 py-2 sm:px-8 sm:py-3 border text-white font-semibold
              hover:text-white hover:bg-red-600 duration-300">
                Watch Latter
              </button>
            </div>
           <div>
            <p className="text-slate-400 font-bold">
                Released: {randomMovie?.release_date}
            </p>
           </div>
           <div className="max-w-[80%] sm:max-w-[65%] lg:max-w-[55%] text-white">
              <p className="text-sm sm:text-lg lg:text-lg">
                {maxOverview(randomMovie?.overview, 30)}
              </p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;