// import { useEffect, useState } from 'react';
// import { fetchDayTrend } from 'services/apiService';
// import { MoviesList } from 'components/MoviesList/MoviesList';

// export const Home = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const { results } = await fetchDayTrend();
//         setMovies(results);
//       } catch (err) {
//         console.log(err);
//       }
//     })();
//   }, []);
//   return (
//     <div>
//       <h1>Home</h1>
//       <MoviesList movies={movies} />
//     </div>
//   );
// };

import { useEffect, useState } from 'react';
import { fetchDayTrend } from 'services/apiService';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await fetchDayTrend();
        setMovies(results);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <MoviesList movies={movies} />
    </div>
  );
};
