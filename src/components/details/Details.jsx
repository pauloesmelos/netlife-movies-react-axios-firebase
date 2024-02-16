import React from "react";

const Details = ({ movie }) => {
  const path_image = import.meta.env.VITE_APP_API_PATH_IMAGE;

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
      </div>
    </section>
  )
}

export default Details;