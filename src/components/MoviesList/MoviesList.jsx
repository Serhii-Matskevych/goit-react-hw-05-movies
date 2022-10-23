import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import * as SC from './MoviesList.styled';
export const MoviesList = ({ movies, state }) => {
  // const linkTo = location.pathname === '/' ? 'movies/' : '';

  return (
    <SC.MoviesContainer>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <SC.MovieThumb>
            <img
              src={
                poster_path === null
                  ? `https://via.placeholder.com/64x96`
                  : `https://image.tmdb.org/t/p/w500${poster_path}`
              }
              alt={title}
              width="64"
            />
            <NavLink to={`/movies/${id}`} state={state}>
              {title}
            </NavLink>
          </SC.MovieThumb>
        </li>
      ))}
    </SC.MoviesContainer>
  );
};

MoviesList.propTypes = {
  requiredArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
