import { useParams, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetMovieDetails } from '../../services/GetMovie';
import { AiOutlineArrowLeft } from 'react-icons/ai';
const MovieDetails = () => {
  const { moviesId } = useParams();
  const [error, setError] = useState(null);
  const [film, setFilm] = useState();
  console.log(film);
  const location = useLocation();
  // console.log(location.state);
  const backLinkLocation = location.state?.from ?? '/movies';
  console.log(backLinkLocation);
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
    <>
      <div>
        {error && <h1>{error.message}</h1>}
        <Link to={backLinkLocation}>
          <AiOutlineArrowLeft size="15" />
          Go back
        </Link>
        {film && (
          <img
            width="250"
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt=""
          />
        )}
      </div>
    </>
  );
};
export default MovieDetails;
