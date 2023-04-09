import { useState, useEffect } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import { GetMovieTrending } from '../../services/GetMovie';
import css from './Home.module.css';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetMovieTrending()
      .then(response => {
        return setMovies(response.results);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <h1 className={css.title}>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};
export default Home;
