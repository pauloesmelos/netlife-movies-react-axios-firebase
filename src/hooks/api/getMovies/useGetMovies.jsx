import axios from "axios";
import { useQuery } from 'react-query';

const getMovies = async (url) => {
    if(url) {
      return await axios.get(`${url}`)
      .then(response => response.data)
      .catch(erro => console.log(erro));
    }
}
const useGetMovies = (url, title) => {
  const { data: movies, isLoading, isError, } = useQuery(
    ["get-movies", `${title}`], /* como esse hook é usado por várias urls, para retornar resultados diferentes é necessários usar outra chave unica */
    () => getMovies(url),
    {
        enabled: !!url,/* a consulta da query só sera feita se url for diferente de null/undefined */
        refetchOnWindowFocus: false /* inibe múltiplos fetchs sempre que a página ganho foco */,
    } 
  );
  return { movies, isLoading, isError }; 
}

export default useGetMovies;