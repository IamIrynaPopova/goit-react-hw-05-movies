import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(movie => {
          const { title, id } = movie;
          return (
            <li key={id}>
              <Link to={`${title}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default MoviesList;
