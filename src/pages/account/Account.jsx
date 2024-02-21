import React from "react";
import { GlobalSavedMovies } from "../../global/saved-movies/GlobalSavedMovies";
import { GlobalUser } from "../../global/user/GlobalUser";
import { RiMovieFill } from "react-icons/ri";
import AccountSlider from "../../components/account-slider/AccountSlider";

const Account = () => {
  const { savedMovies, username } = React.useContext(GlobalSavedMovies);
  const { user } = React.useContext(GlobalUser);
  
  return (
    <section className="w-full">
      <div className="w-full">
        <div className="w-full h-[300px] bg-movies bg-center bg-no-repeat bg-cover relative">
          {/* overlay */}
          <div className="w-full h-full absolute top-0 left-0 bg-black/70" />
          <h2 className="text-gray-400 text-3xl sm:text-4xl absolute top-[40%] left-5 font-bold">
            Edit Profile
          </h2>
        </div>
        <div className="px-6 pt-2">
          <div className="flex items-center gap-4 my-8">
            <RiMovieFill className="text-3xl text-white" />
            <h2 className="text-white font-bold text-2xl sm:text-3xl">
              My Movies
            </h2>
          </div>
          {/* container slider */}
          <div className="w-full">
            <AccountSlider savedMovies={savedMovies} />
          </div>   
        </div>
      </div>
    </section>
  )
}

export default Account;