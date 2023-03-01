import { useEffect, useState } from 'react';
import { fetchDayTrend } from 'services/apiService';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchDayTrend();
        setMovies(results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Nranding today</h1>
      {movies.length !== 0 && <MoviesList movies={movies} />}
      {isLoading && <p>Loading</p>}
      {error && <p>Подождите, что-то пошло не так</p>}
    </div>
  );
};
export default Home;
