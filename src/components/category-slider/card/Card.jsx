import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalSavedMovies } from "../../../global/saved-movies/GlobalSavedMovies";
import { GlobalUser } from "../../../global/user/GlobalUser";

const Card = ({ movie }) => {
  const pathIcon = import.meta.env.VITE_APP_API_PATH_ICON;
  const navigate = useNavigate();
  const [like, setLike] = React.useState(false);
  const { 
    savedMovies, 
    handleSavedMovies, 
    handleRemoveMovie 
  } = React.useContext(GlobalSavedMovies);
  const { isLogged } = React.useContext(GlobalUser);

  const limitText = (text, limit) => {
    const newText = text?.split(" ").slice(0, limit).join(" ");
    return text?.split(" ").length > 4 ? newText.concat("...") : newText;
  }
  const handleNavigate = ({ target }) => {
    /* aria-label ou id in the solution */
    const id = "like";
    const element = target.id;
    const parent = target.closest(`#${id}`) ? target.closest(`#${id}`).id : null ;

    if (element !== id && parent !== id) {
      navigate(`/movies/${movie?.id}`);
    }
  }
  const saveMovie = () => {
    if(isLogged()) {
      handleSavedMovies(movie);
      setLike(true);
    }
    else {
      notify();
    }
  }
  const removeMovie = () => {
    handleRemoveMovie(movie?.id);
    setLike(false);
  }
  const notify = () => {
    toast.error("Please, do login in Netlife.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      theme: "light",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Bounce
    })
  }
  
  React.useEffect(() => {
    const isLike = savedMovies?.some(mov => mov.title === movie?.title);
    setLike(isLike);
  }, [savedMovies]); // put setLike to ??

  if (!movie?.backdrop_path) return null;

  return (
    <div
      id="container"
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
          {like ? (
            <div 
              id="like" 
              onClick={removeMovie} 
              className="absolute top-1 sm:top-2 left-2"
            >
              <FaHeart
                id="like" 
                className="text-red-600 text-xl sm:text-2xl"
              />
            </div>
          ) : (
            <div 
              id="like" 
              onClick={saveMovie} 
              className="absolute top-1 sm:top-2 left-2"
            >
              <FaRegHeart
                id="like" 
                className="text-red-400 hover:text-red-600 text-xl sm:text-2xl"
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;