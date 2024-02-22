import React from "react";
import { IoClose } from "react-icons/io5";
import { GlobalSavedMovies } from "../../../global/saved-movies/GlobalSavedMovies";

const Item = ({ movie }) => {
  const path_icon = import.meta.env.VITE_APP_API_PATH_ICON;
  const { handleRemoveMovie } = React.useContext(GlobalSavedMovies);

  return (
    <div className="relative pr-2 inline-block w-[220px] sm:w-[300px] lg:w-[320px] xl:w-[380px]
    cursor-pointer">
      <div>
        <img
          className="w-full h-full object-cover brightness-[80%] border border-slate-800"
          src={`${path_icon}${movie?.img}`}
          title={movie?.title}
          alt={movie?.title}
        />
      </div>
      {/* overlay */}
      <div className="absolute w-full h-full top-0 left-0 bg-black/50 opacity-0
      hover:opacity-100">
        <div className="absolute top-[40%] left-[30%]">
            <p className="text-white font-bold text-sm text-wrap">{movie?.title}</p>
        </div>
        <div>
          <IoClose
            onClick={() => handleRemoveMovie(movie?.id)}
            className="text-white hover:text-red-600 absolute top-1 left-3 
              text-2xl sm:text-3xl" 
          />
        </div>
      </div>
    </div>
  )
}

export default Item;