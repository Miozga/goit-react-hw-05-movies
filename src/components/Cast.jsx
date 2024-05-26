import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../api';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieCast = await getMovieCredits(movieId);
        setCast(movieCast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <h1>Obsada</h1>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            {actor.name} jako {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default Cast;
