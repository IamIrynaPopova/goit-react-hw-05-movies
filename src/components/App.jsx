import Movies from '../pages/Movies/Movies';

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
        {/* <Route  path="/" element={<Home/>}/> */}
        <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<div>moviesDetails</div>} />
      </Routes>
    </div>
  );
};
