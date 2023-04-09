import { GetMovieCast } from '../../services/GetMovie';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import img from 'image/img.jpg';
import css from './Cast.module.css';

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
      <ul className={css.list}>
        {actors.map(actor => {
          const { id, name, profile_path, character } = actor;
          return (
            <li key={id}>
              {profile_path ? (
                <img
                  className={css.image}
                  width="150"
                  height="225"
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
              ) : (
                <img
                  className={css.image}
                  width="150"
                  height="225"
                  src={img}
                  alt={name}
                />
              )}

              <p className={css.name}>{name}</p>
              <p className={css.character}>{character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
