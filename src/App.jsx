import React, { Suspense } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import './App.css';

const Home = React.lazy(() => import('./components/Home'));
const Movies = React.lazy(() => import('./components/Movies'));
const MovieDetails = React.lazy(() => import('./components/MovieDetails'));
const Cast = React.lazy(() => import('./components/Cast'));
const Reviews = React.lazy(() => import('./components/Reviews'));

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
