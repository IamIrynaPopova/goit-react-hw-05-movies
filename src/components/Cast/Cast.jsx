import { GetMovieCast } from '../../services/GetMovie';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import img from 'image/img.jpg';

const Cast = () => {
  const { moviesId } = useParams();
  const [error, setError] = useState(null);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    GetMovieCast(moviesId)
      .then(response => {
        return setActors(response.cast);
      })
      .catch(error => setError(error));
  }, [moviesId]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <ul>
        {actors.map(actor => {
          const { id, name, profile_path, character } = actor;
          return (
            <li key={id}>
              {profile_path ? (
                <img
                  width="250"
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
              ) : (
                <img width="250" src={img} alt={name}/>
              )}

              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
