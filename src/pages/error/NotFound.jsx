import React from "react";
import { routesMovie } from "../../api/api.js";
import useGetMovies from "../../hooks/api/getMovies/useGetMovies.jsx";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const api = routesMovie.popular;
  const path_img = import.meta.env.VITE_APP_API_PATH_IMAGE;
  const [firstMovie, setFirstMovie] = React.useState({});
  const { movies } = useGetMovies(api);
  console.log(movies);
  React.useEffect(() => {
    setFirstMovie({
      ...movies?.results[3] /* random index ;) */
    });
  }, [movies]);

  return (
    <section className="w-full h-screen">
      <div className="w-full h-full">
        {/* background img */}
        <img
          className="w-full h-full object-cover"
          src={`${path_img}${firstMovie.backdrop_path}`}
          alt={firstMovie.title}
          title={firstMovie.title}
        />
        {/* overlay */}
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r 
        from-black to-black/70" />
        {/* container center */}
        <div className="w-full h-full absolute top-0 left-0 flex flex-col gap-10
        justify-center items-center">
          {/* contents */}
          <div className="cursor-default">
            <h2 className="text-white text-6xl font-bold">
              Got Lost?
            </h2>
          </div>
          <div className="max-w-[80%] cursor-default">
            <p className="text-gray-300 text-2xl text-center font-semibold">
              Erro 404, page could not be found. A wide choice of titles awaits you on the home page.
            </p>
          </div>
          <div>
            <NavLink 
              className="px-8 py-3 bg-white text-black font-semibold text-xl rounded
              hover:opacity-80 duration-200" 
              to={"/"}
            >
              Netlife Home
            </NavLink>
          </div>
          <div className="w-full flex justify-end px-[16%] mt-16 relative">
            <p className="text-white font-thin after-red">
              From
              <span className="font-bold px-2 text-lg">{firstMovie.title}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound;