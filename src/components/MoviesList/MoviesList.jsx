import { NavLink, useLocation } from 'react-router-dom';
//import { propTypes } from 'prop-types';

const isActive = ({ isActive }) => (isActive ? 'active_card' : 'card');
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className="render_List">
      {movies.map(movie => (
        <li key={movie.id} className="renderCard">
          <NavLink
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={isActive}
          >
            {movie.title || movie.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

//MoviesList.propTypes = {
//   movies: propTypes.array.Of(
//     propTypes.shape({
//       id: propTypes.number.isRequired,
//       title: propTypes.string.isRequired,
//       name: propTypes.string.isRequired,
//     })
//   ),
//movies: propTypes.array,
//};
