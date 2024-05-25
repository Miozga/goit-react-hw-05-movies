import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../api';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieCast = await getMovieCredits(movieId);
      setCast(movieCast);
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

export default Cast;
