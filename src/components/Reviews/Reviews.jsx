import { GetMovieReviews } from '../../services/GetMovie';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();
  const [error, setError] = useState(null);
  useEffect(() => {
    GetMovieReviews(moviesId)
      .then(reviews => {
        return setReviews(reviews.results);
      })
      .catch(error => setError(error));
  }, [moviesId]);
  return (
    <>
      {error && <h1>{error.message}</h1>}
      <ul className={css.list}>
        {reviews.length !== 0 ? (
          reviews.map(review => {
            const { author, content, id } = review;
            return (
              <li className={css.item}  key={id}>
                <p className={css.author} >Author: {author}</p>
                <p className={css.content}>{content}</p>
              </li>
            );
          })
        ) : (
          <p className={css.content}>We don't have any reviews for this movie</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
