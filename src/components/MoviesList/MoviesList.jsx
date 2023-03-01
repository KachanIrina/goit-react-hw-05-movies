import { NavLink, useLocation } from 'react-router-dom';
import { propTypes } from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  // movies: propTypes.shape(
  //   propTypes.exact({
  //     id: propTypes.number.isRequired,
  //     title: propTypes.string.isRequired,
  //     name: propTypes.string.isRequired,
  //   })
  // ),
  movies: propTypes.array,
};
