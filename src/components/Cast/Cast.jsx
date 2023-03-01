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
    <div className="Cast_box">
      <h1 className="Cast_title">Cast</h1>
      {cast.map(actor => (
        <li key={actor.id} className="Cast_card">
          <img src={BASE_IMG_URL + actor.profile_path} alt="" width="200" />
          {actor.name}
        </li>
      ))}
    </div>
  );
};

export default Cast;
