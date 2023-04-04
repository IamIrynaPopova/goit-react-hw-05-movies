const API_KEY = 'd6e2d812705f2ba1d6991630cb7a4f6a';
const MOVIE_URL = 'https://api.themoviedb.org/3/';
const GetMovie = (query) => {
return fetch(
      `${MOVIE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=ru-US&page=1&include_adult=false`
    )       
}

export default GetMovie;