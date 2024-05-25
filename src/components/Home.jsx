import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../services/api';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Popular Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </
