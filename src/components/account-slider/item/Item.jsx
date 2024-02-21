import React from "react";
import { FaHeart } from "react-icons/fa";
import { doc, updateDoc } from "firebase/firestore";
import { GlobalUser } from "../../../global/user/GlobalUser";
import { db } from "../../../firebase/firebase";

const Item = ({ movie }) => {
  const path_icon = import.meta.env.VITE_APP_API_PATH_ICON;
  const { user } = React.useContext(GlobalUser);

  const removeMovie = async () => {
    const reference = doc(db, "users", `${user?.email}`);
    //
  }
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
          <FaHeart
            onClick={removeMovie}
            className="text-red-500 hover:text-red-300 absolute top-3 left-3 
              text-xl sm:text-2xl" 
          />
        </div>
      </div>
    </div>
  )
}

export default Item;