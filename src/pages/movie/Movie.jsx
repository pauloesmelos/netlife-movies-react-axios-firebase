import React from "react";
import { useParams } from "react-router-dom";
import useGetMovieId from "../../hooks/api/getMovieId/useGetMovieId";

const Movie = () => {
  const { id } = useParams();
  const { data } = useGetMovieId(id);
  console.log(data);
  return (
    <section>
      
    </section>
  )
}

export default Movie;