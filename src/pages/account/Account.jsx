import React from "react";
import { GlobalSavedMovies } from "../../global/saved-movies/GlobalSavedMovies";
import { GlobalUser } from "../../global/user/GlobalUser";

const Account = () => {
  const { savedMovies, username } = React.useContext(GlobalSavedMovies);
  const { user } = React.useContext(GlobalUser);
  console.log(savedMovies);
  
  return (
    <section className="w-full pt-24">
      <div className="px-6">
        <div>
          <h2 className="text-slate-400 text-4xl">
            Edit Profile
          </h2>
        </div>
        <div className="text-white">
          <p>Email: {user?.email}</p>
          <p>User: {username}</p>
        </div>
      </div>
    </section>
  )
}

export default Account;