import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetMovieDetails } from '../../services/GetMovie';
const MovieDetails = () => {
  const { moviesId } = useParams();
  const [film, setFilm] = useState();
  console.log(moviesId,film);
  const location = useLocation();
  const backLinkLocation = location.state?.from ?? '/';
  useEffect(() => {
    GetMovieDetails(moviesId)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(response => {
        return setFilm(response);
      });
  }, [moviesId]);

  return (
    <>
      <h2>movies {moviesId}</h2>
    </>
  );
};
export default MovieDetails;
