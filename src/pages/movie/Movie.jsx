import React from "react";
import { useParams } from "react-router-dom";
import Details from "../../components/details/Details";
import Footer from "../../components/footer/Footer";
import Promotion from "../../components/promotion/Promotion";
import useGetMovieId from "../../hooks/api/getMovieId/useGetMovieId";

const Movie = () => {
  const path_image = import.meta.env.VITE_APP_API_PATH_IMAGE;
  const { id } = useParams();
  const { data } = useGetMovieId(id);

  const getYear = (text) => {
    const year = text?.split("-");
    return year[0]; // 2024 01 20
  }
  console.log(data);
  if(!data) return null;
  return (
    <section className="w-full h-full">
      <div className="w-full h-full">
        {/* img banner */}
        <img
          className="w-full h-screen object-cover"
          src={`${path_image}${data?.backdrop_path}`}
          alt={data?.title}
          title={data?.title}
        />
        {/* overlay */}
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/90 to-black/10" />
        {/* content */}
        <div className="absolute top-[30%] left-6 flex flex-col gap-4">
          <div>
            <h2 className="text-white text-2xl font-bold">
              {data?.title}
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 font-semibold gap-4">
            <p>
              {getYear(data?.release_date)}
              <span className="ml-3 hidden sm:inline-block">|</span>
            </p>
            <p className="px-2 sm:border border-gray-500">
              {data?.original_language.toString().toUpperCase()}
            </p>
            {data?.genres.map((genre, index) => (
              <div className="flex gap-4" key={index * Math.random()}>
                { index < data?.genres.length ?
                  (
                    <span className="hidden sm:inline-block">|</span>
                  ) :
                    <></>
                }
                <p>
                  {genre.name}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full max-w-[80%] sm:max-w-[50%]">
            <p className="text-white text-[1rem] sm:text-lg">
              {data?.overview}
            </p>
          </div>
        </div>
        {/* promotion subscribed */}
        <div className="flex justify-center">
          <Promotion />
        </div>
        {/* details */}
        <div className="w-full bg-[#222]">
          <Details movie={data} />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Movie;