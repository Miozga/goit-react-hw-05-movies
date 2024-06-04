import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieDetails } from '../api';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchData();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Obsada</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Recenzje</Link>
        </li>
      </ul>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;
