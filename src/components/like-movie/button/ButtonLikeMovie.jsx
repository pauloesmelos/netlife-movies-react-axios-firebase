import React from 'react';
import { BiLike } from "react-icons/bi";
import { GlobalSavedMovies } from '../../../global/saved-movies/GlobalSavedMovies';

const ButtonLikeMovie = ({ handleSave, handleRemove, like, setLike, title }) => {
  const { savedMovies } = React.useContext(GlobalSavedMovies);

  React.useEffect(() => {
    const isLiked = savedMovies?.some((movie) => movie.title === title);
    setLike(isLiked);
  }, [savedMovies, title]);

  return (
    <>
      {
        like ? (
          <button
            onClick={handleRemove}
            className="py-2 px-12 bg-red-600 text-white rounded-lg hover:opacity-80 duration-200
              flex items-center gap-2 border border-red-600"
          >
            <BiLike className="text-xl text-white" />
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="py-2 px-12 bg-transparent text-white rounded-lg hover:bg-red-600 duration-200
              flex items-center gap-2 border border-red-600"
          >
            <BiLike className="text-xl text-white" />
          </button>
        )
      }
    </>
  )
}

export default ButtonLikeMovie;