import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetMovieDetails } from '../../services/GetMovie';
import { AiOutlineArrowLeft } from 'react-icons/ai';
const MovieDetails = () => {
  const { moviesId } = useParams();
  const [error, setError] = useState(null);
  const [film, setFilm] = useState();
  const location = useLocation();
  // console.log(location.state);
  const backLinkLocation = location.state?.from ?? '/movies';
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
    <div>
      {error && <h1>{error.message}</h1>}
      <Link to={backLinkLocation}>
        <AiOutlineArrowLeft size="15" />
        Go back
      </Link>
      {film && (
        <>
          <img
            width="250"
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.title}
          />
          <h1>{film.title}</h1>
          <p>User score:{(film.vote_average * 10).toFixed(0)}%</p>
          <h2>Overview</h2>
          <p>{film.overview}</p>
          <h3>Genres</h3>
          <p>
            {film.genres
              .map(genre => {
                return genre.name;
              })
              .join(', ')}
          </p>
          <h4> Additional information</h4>
          <ul>
            <Link to="cast">Cast</Link>
            <Link>Reviews</Link>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
};
export default MovieDetails;
