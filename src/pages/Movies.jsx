import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/apiService';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    (async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchMovieByQuery(searchQuery);
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setQuery(searchQuery);
        setIsLoading(false);
      }
    })();
  }, [searchQuery]);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search"
        />
        <button type="submit">search</button>
      </form>
      <MoviesList movies={movies} />
      {isLoading && <p>Loading</p>}
      {error && <p>Подождите, что-то пошло не так</p>}
    </div>
  );
};

export default Movies;
