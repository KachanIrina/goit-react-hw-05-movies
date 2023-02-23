// import { MoviesList } from 'components/MoviesList/MoviesList';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { fetchMovieByQuery } from 'services/apiService';

// export const Movies = () => {
//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchQuery = searchParams.get('query');

//   useEffect(() => {
//     if (!searchQuery) {
//       return;
//     }
//     (async () => {
//       try {
//         const { results } = await fetchMovieByQuery(searchQuery);
//         setMovies(results);
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }, [searchQuery]);

//   const handleChange = ({ target: { value } }) => {
//     setQuery(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     setSearchParams({ query });
//   };

//   return (
//     <div>
//       <h1>Movies</h1>

//       <form onSubmit={handleSubmit}>
//         <input type="text" value={query} onChange={handleChange} />
//         <button type="submit">search</button>
//       </form>

//       <MoviesList movies={{ movies }} />
//     </div>
//   );
// };

export const Movies = () => {
  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
};
