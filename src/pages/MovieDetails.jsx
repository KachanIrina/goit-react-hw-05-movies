import { useEffect, useState } from 'react';
import { fetchMovieDetsById } from 'services/apiService';
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { BASE_IMG_URL } from 'services/constants';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetsById(id).then(resp => {
      setMovieData(resp);
    });
  }, [id]);

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  if (!movieData) {
    return (
      <div>
        <h1>Loadind data...</h1>
      </div>
    );
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <button
        onClick={handleGoBack}
        style={{
          display: 'flex',
          width: '50',
          marginRight: 'auto',
        }}
      >
        go back
      </button>
      <img src={BASE_IMG_URL + movieData.poster_path} alt="" width="300" />
      <h1>Additional information</h1>
      {/* <div className={css.cast}> */}
      <NavLink
        to="cast"
        state={{ from: location.state.from }}
        style={{ marginLeft: '10' }}
      >
        cast
      </NavLink>
      {/* </div> */}
      <NavLink to="reviews" state={{ from: location.state.from }}>
        reviews
      </NavLink>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
