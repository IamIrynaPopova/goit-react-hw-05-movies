import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetMovie from '../../services/GetMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

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
      });
  }, [value]);

  const onSearchMovies = e => {
    e.preventDefault();
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
      {movies.length > 0 &&
        movies.map(movie => {
          const { title, id } = movie;
          return (
            <Link to={`${title}`} key={id}>
              {title}
            </Link>
          );
        })}
    </>
  );
};
export default Movies;
