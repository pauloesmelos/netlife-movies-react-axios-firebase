import React from 'react';
import { BiLike } from "react-icons/bi";

const ButtonLikeMovie = () => {

  return (
    <button className="py-2 px-12 bg-red-600 text-white rounded-lg hover:opacity-80 duration-200
    flex items-center gap-2">
        <BiLike className="text-xl text-white" />
    </button>
  )
}

export default ButtonLikeMovie;