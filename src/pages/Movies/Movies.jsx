import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetMovie } from '../../services/GetMovie';
import MoviesList from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('query') ?? '';
  const [error, setError] = useState(null);
  useEffect(() => {
    if (value === '') {
      return;
    }
    GetMovie(value)
      .then(response => {
        return setMovies(response.results);
      })
      .catch(error => setError(error));
  }, [value]);

  const onSearchMovies = e => {
    e.preventDefault();
    setMovies([]);
    const form = e.currentTarget;
    const query = form.elements.input.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    form.reset();
  };

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <form className="form" onSubmit={onSearchMovies}>
        <input
          className="input"
          type="text"
          placeholder="Search"
          name="input"
          autoComplete="off"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
export default Movies;
