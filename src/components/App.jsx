import Movies from '../pages/Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Home from '../pages/Home/Home';
import { Routes, Route, NavLink } from 'react-router-dom';
import css from './App.module.css';
import { lazy } from 'react';
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const setActive = ({ isActive }) => (isActive ? 'active' : 'link');
  return (
    <>
      <div className={css.container}>
        <header className={css.header}>
          <nav>
            <NavLink className={setActive} to="/">
              Home
            </NavLink>
            <NavLink className={setActive} to="/movies">
              Movies
            </NavLink>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
