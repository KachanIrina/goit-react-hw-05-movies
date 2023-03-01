import { useEffect, useState } from 'react';
import { fetchCastInfo } from '../../services/apiService';
import { useParams } from 'react-router-dom';
import { BASE_IMG_URL } from 'services/constants';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCastInfo(id).then(setCast);
  }, [id]);
  return (
    <div>
      <h1>Cast</h1>
      {cast.map(actor => (
        <li key={actor.id}>
          <img src={BASE_IMG_URL + actor.profile_path} alt="" width="200" />
          {actor.name}
        </li>
      ))}
    </div>
  );
};

export default Cast;
