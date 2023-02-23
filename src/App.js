// import { Navigation } from 'components/Navigation/Navigation';
// import { Routes, Route } from 'react-router-dom';
// import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';
// import { MovieDetalis } from 'pages/MovieDetalis';
// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';

// export default function App() {
//   return (
//     <div className="App">
//       <Navigation />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="movies" element={<Movies />} />
//         <Route path="movies/:id" element={<MovieDetalis />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

import { Navigation } from 'components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { MovieDetalis } from 'pages/MovieDetalis';
import { Movies } from 'pages/Movies';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

export default function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetalis />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
}
