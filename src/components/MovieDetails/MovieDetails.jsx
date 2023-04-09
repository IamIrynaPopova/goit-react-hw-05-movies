import {
  useParams,
  useLocation,
  Link,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetMovieDetails } from '../../services/GetMovie';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import css from './MovieDetails.module.css';
const MovieDetails = () => {
  const { moviesId } = useParams();
  const [error, setError] = useState(null);
  const [film, setFilm] = useState();
  const location = useLocation();
  const backLinkLocation = location.state?.from ?? '/movies';
  const setActive = ({ isActive }) => (isActive ? 'active' : 'link');
  useEffect(() => {
    GetMovieDetails(moviesId)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(response => {
        return setFilm(response);
      })
      .catch(error => setError(error));
  }, [moviesId]);

  return (
    <div className={css.container}>
      {error && <h1>{error.message}</h1>}
      <Link className={css.back} to={backLinkLocation}>
        <AiOutlineArrowLeft size="15" color="white" />
        Go back
      </Link>
      {film && (
        <>
          <div className={css.film_container}>
            <div>
              <img
                className={css.image}
                width="250"
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
              />
            </div>
            <div className={css.film_info}>
              <h1 className={css.title}>{film.title}</h1>
              <p className={css.score}>
                User score: {(film.vote_average * 10).toFixed(0)}%
              </p>
              <h2 className={css.overview}>Overview</h2>
              <p>{film.overview}</p>
              <h3 className={css.genre}>Genres</h3>
              <p>
                {film.genres
                  .map(genre => {
                    return genre.name;
                  })
                  .join(', ')}
              </p>
            </div>
          </div>
          <div className={css.film_additional}>
            <h4 className={css.title_additional}> Additional information</h4>
            <ul className={css.list}>
              <NavLink className={setActive} to="cast">
                Cast
              </NavLink>
              <NavLink className={setActive} to="reviews">
                Reviews
              </NavLink>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
};
export default MovieDetails;
