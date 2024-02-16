import React from "react";
import { BsEmojiFrown , BsEmojiAngry, BsEmojiGrinFill    } from "react-icons/bs";
import { FaSmile } from "react-icons/fa";

const Details = ({ movie }) => {
  const path_image = import.meta.env.VITE_APP_API_PATH_IMAGE;

  const getRunTime = (time) => {
    let hourFormated = "";
    const hour = Math.floor(time / 60);
    const minutes = time % 60;

    if(hour && minutes) {
      hourFormated = `${hour}h ${minutes}m`;
    }
    else {
      hourFormated = "Not available"
    }
    return hourFormated;
  }
  const getEmojiAvaliation = (average) => {
    const style = "text-3xl";

    if(average <= 4) {
      return (
        <div className="flex gap-2 items-center">
          <span className="text-red-500">{average}</span>
          <BsEmojiAngry className={`${style} text-red-500`} />
        </div>
      )
    }
    else if(average > 4 && average <= 6) {
      return (
        <div className="flex gap-2 items-center">
          <span className="text-yellow-500">{average}</span>
          <BsEmojiFrown className={`${style} text-yellow-500`} />
        </div>
      )
    } 
    else {
      return (
        <div className="flex gap-2 items-center">
          <span className="text-emerald-500">{average}</span>
          <FaSmile  className={`${style} text-emerald-500`} />
        </div>
      )
    } 
  }
  console.log(movie);
  if(!movie) return null;
  return (
    <section className="w-full max-w-[1200px] mx-auto py-24">
      <div className="w-full px-10 xl:px-0">
        <div>
          <h2 className="text-white font-semibold text-3xl">
            More details
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-0 mt-12">
            <div>
                <h3 className="text-gray-400">
                    Production Countries
                </h3>
                {movie.production_countries.map((country, index) => (
                    <div key={index * Math.random()} className="flex gap-1 text-white my-2">
                      <p>{country.name}</p>
                      <span>{`(${country.iso_3166_1})`}</span>
                    </div>
                ))}
            </div>
            <div>
                <h3 className="text-gray-400">
                    Languages
                </h3>
                {movie.spoken_languages.map((language, index) => (
                    <div className="my-2" key={index * Math.random()}>
                        <p className="text-white">{language.name}</p>
                    </div>
                ))}
            </div>
            <div>
                <h3 className="text-gray-400">
                    Companies
                </h3>
                {movie.production_companies.map((company ,index) => (
                    <div className="my-2" key={index * Math.random()}>
                        <p className="text-white">
                            {company.name}
                            <span className="ml-1">{`(${company.origin_country})`}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-0 mt-12">
          <div className="mt-16 sm:mt-0">
            <h3 className="text-gray-400">
              Platform
            </h3>
            <p className="text-white my-2">
              Netlife
            </p>
          </div>
          <div>
            <h3 className="text-gray-400">
              Duration
            </h3>
            <div className="my-2">
              <p className="text-white">
                {getRunTime(movie?.runtime)}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-gray-400">
              Avaliation
            </h3>
            <div className="my-2">
              <div className="text-white flex items-center gap-2">
                {getEmojiAvaliation(movie?.vote_average)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details;