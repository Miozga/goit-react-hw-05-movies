import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api';

function Movies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async e => {
    e.preventDefault();
    try {
      const movies = await searchMovies(query);
      setResults(movies);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div>
      <h1>Wyszukiwanie Filmów</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Szukaj</button>
      </form>
      <ul>
        {results.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Movies.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;
