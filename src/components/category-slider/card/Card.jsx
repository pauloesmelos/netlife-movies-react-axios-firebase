import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase/firebase";
import { GlobalUser } from "../../../global/user/GlobalUser";

const Card = ({ movie }) => {
  const pathIcon = import.meta.env.VITE_APP_API_PATH_ICON;
  const navigate = useNavigate();
  const { user, isLogged } = React.useContext(GlobalUser);

  const limitText = (text, limit) => {
    const newText = text?.split(" ").slice(0, limit).join(" ");
    return text?.split(" ").length > 4 ? newText.concat("...") : newText;
  };
  const handleNavigate = ({ target }) => {
    if (target.id !== "like") {
      navigate(`/movies/${movie?.id}`);
    }
  };
  const handleSavedMovies = async () => {
    try {
      if (isLogged()) {
        const reference = doc(db, "users", `${user?.email}`);
        await updateDoc(reference, {
          savedMovies: arrayUnion({
            id: movie?.id,
            title: movie?.title,
            img: movie?.backdrop_path,
          }),
        });
      }
      else {
        alert("Do login, please.");
      }
    } catch (erro) {
      console.log(erro);
    }
  };
  if (!movie?.backdrop_path) return null;

  return (
    <div
      className="w-full inline-block max-w-[230px] sm:max-w-[280px] lg:max-w-[350px] mr-3 
        relative cursor-pointer border border-gray-900"
      onClick={handleNavigate}
    >
      <div className="w-full h-full">
        {/* image */}
        <div>
          <img
            src={`${pathIcon}${movie?.backdrop_path}`}
            className="w-full h-full object-cover"
            alt={movie?.title}
            title={movie?.title}
          />
        </div>
        {/* overlay and title card */}
        <div
          className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 bg-black/50 
        duration-200 text-wrap"
        >
          <span
            className="text-white font-bold text-sm sm:text-lg flex justify-center 
          items-center w-full h-full px-10 sm:px-2"
          >
            {limitText(movie?.title, 4)}
          </span>
          {/* like */}
          <div className="absolute top-1 sm:top-2 left-2">
            <FaRegHeart
              onClick={handleSavedMovies}
              id="like"
              className="text-red-400 hover:text-red-600 text-xl sm:text-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
