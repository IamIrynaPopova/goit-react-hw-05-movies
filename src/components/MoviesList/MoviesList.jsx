import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.list}>
        {movies.map(movie => {
          const { title, id } = movie;
          return (
            <li className={css.item} key={id}>
              <Link
                className={css.link}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default MoviesList;
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
