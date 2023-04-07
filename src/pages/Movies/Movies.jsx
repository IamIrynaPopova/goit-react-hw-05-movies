import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetMovie } from '../../services/GetMovie';
import MoviesList from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  useEffect(() => {
    if (value === '') {
      return;
    }
    GetMovie(value)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(response => {
        return setMovies(response.results);
      })
      .catch(error => setError(error));
       }, [value]);

  const onSearchMovies = e => {
    e.preventDefault();
    setMovies([]);
    const form = e.currentTarget;
    setValue(form.elements.input.value);
    form.reset();
  };
  const onChange = e => {
    const query = e.target.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
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
          onChange={onChange}
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
