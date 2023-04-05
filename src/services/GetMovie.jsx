const API_KEY = 'd6e2d812705f2ba1d6991630cb7a4f6a';
const MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/day'
const MOVIE_DETAILS_URL = 'https://api.themoviedb.org/3/movie/';
const GetMovie = (value) => {
return fetch(
      `${MOVIE_URL}?api_key=${API_KEY}&query=${value}&language=ru-US&page=1&include_adult=false`
    )       
}

const GetMovieTrending = () => {
  return fetch(`${TRENDING_URL}?api_key=${API_KEY}`)
}

const GetMovieDetails = (movie_id) => {
  return fetch(`${MOVIE_DETAILS_URL}${movie_id}?api_key=${API_KEY}&language=en-US`)
}
export {GetMovie,GetMovieTrending,GetMovieDetails} ;