import axios from "axios";
import { useQuery } from "react-query";
import routesMovie from "../../../api/api";

const getMovie = async (id) => {
    const key = import.meta.env.VITE_APP_API_KEY;
    const url = routesMovie.specify;
    return axios.get(`${url}/${id}?language=en-US&api_key=${key}`)
    .then(response => response.data)
    .catch(erro => console.log(erro));
}
const useGetMovieId = (id) => {
  const query = useQuery(
    ["get-movie-id", `${id}`],
    () => getMovie(id),
    {
        enabled: !!id,
        refetchOnWindowFocus: false
    }
  );
  return query;
}

export default useGetMovieId;