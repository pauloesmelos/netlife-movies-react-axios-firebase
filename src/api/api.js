const key = import.meta.env.VITE_APP_API_KEY;

export const routesMovie = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    horror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
}
export const specify = {
    url: `https://api.themoviedb.org/3/movie`
}