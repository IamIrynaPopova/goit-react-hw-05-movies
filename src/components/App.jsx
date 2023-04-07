import Movies from '../pages/Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Home from '../pages/Home/Home';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews'
import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  return (
    <div className="container">
      <header className="header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>} />
        </Route> 
      </Routes>
    </div>
  );
};
