import axios from "axios";
import { useQuery } from "react-query";
import { specify } from "../../../api/api.js";

const getMovie = async (id) => {
    const key = import.meta.env.VITE_APP_API_KEY;
    const url = specify.url;
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