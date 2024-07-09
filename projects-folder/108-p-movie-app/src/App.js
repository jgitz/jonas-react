import { useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function Search() /* 108-0  */ {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function Logo() /* 108-0 */ {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function NumResults({ movies }) /* 108-0 */ /* 110-0 received movies prop from APP COMPONENT */ {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results {/* 110-0 used movies.length to display result numbers */}
    </p>
  );
}

function NavBar({
  children,
}) /* 108-0 made navbar component */ /* 110-0 received movie prop from app component to pass to NUM-RESULTS COMPONENT */ /* 112 children prop added to utilize component compensation technique */ {
  return (
    <>
      <nav className="nav-bar">
        <Logo /> {/* 108-0 */}
        {children} {/* 112 component composition technique */}
        {/* <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div> */}{" "}
        {/* 108-0 code used to make logo component */}
        {/* <Search/> */} {/* 108-0 */} {/* 112 commented to implement component composition to prevent props drilling */}
        {/* <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          /> */}{" "}
        {/* 108-0 commented to make it into a separate search component */}
        {/*  <NumResults movies={movies}/> */} {/* 108-0 */} {/* 110-0 passed moves prop from app component */}{" "}
        {/* 112 commented to implement component composition to prevent props drilling */}
        {/* <p className="num-results">
          Found <strong>X</strong> results
        </p> */}{" "}
        {/* 108-0 commente to make it into a separate component named NumResults */}
      </nav>
    </>
  );
}

function Movie({ movie }) /* 108-0 */ {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieList({ movies }) /* 108-0 */ {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
        /> /* 108-0 */ /* 108-0 commented to make it into a separate Movie component */

        /* <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li> */
      ))}
    </ul>
  );
}

function Box({children}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
} /* 113- box component created using componenet composition technique to replace LIST-BOX component */

// function ListBox ({children})/* 108-0 */ /* 110-0 received movies prop from to pass to movie list component */ /* 112 added children prop to implement component composition */ {

//   const [isOpen1, setIsOpen1] = useState(true);
//   return (
//   <div className="box">
//         <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
//           {isOpen1 ? "–" : "+"}
//         </button>
//         {isOpen1 && (

//           children /* 112 added children prop to implement component composition   */

//           /* <MovieList movies={movies}/> */ /* 108-0 */ /* 110-0 passed movies prop from app to movie list component  */  /* 112 commented to implement componenet composition using children props */

//           /* <ul className="list">
//             {movies?.map((movie) => (
//               <li key={movie.imdbID}>
//                 <img src={movie.Poster} alt={`${movie.Title} poster`} />
//                 <h3>{movie.Title}</h3>
//                 <div>
//                   <p>
//                     <span>🗓</span>
//                     <span>{movie.Year}</span>
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ul> */ /* 108-0 commented to make it into a separate component named MoviesList */
//         )}
//       </div>
//   )
// } /* 113 commented to convert it to a BOX COMPONENT which uses component composition technique */

// function WatchedBox() /* 108-0 */ {
//   const [watched, setWatched] = useState(tempWatchedData);
//   const [isOpen2, setIsOpen2] = useState(true);

//   return (
//     <div className="box">
//       <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
//         {isOpen2 ? "–" : "+"}
//       </button>
//       {isOpen2 && (
//         <>
//           <WatchedSummary watched={watched} /> {/* 108-0 */}
//           {/* <div className="summary">
//               <h2>Movies you watched</h2>
//               <div>
//                 <p>
//                   <span>#️⃣</span>
//                   <span>{watched.length} movies</span>
//                 </p>
//                 <p>
//                   <span>⭐️</span>
//                   <span>{avgImdbRating}</span>
//                 </p>
//                 <p>
//                   <span>🌟</span>
//                   <span>{avgUserRating}</span>
//                 </p>
//                 <p>
//                   <span>⏳</span>
//                   <span>{avgRuntime} min</span>
//                 </p>
//               </div>
//             </div> */}{" "}
//           {/* 108-0 commented to make it into a separate component named WatchedSummary */}
//           <WatchedMoviesList watched={watched} /> {/* 108-0 */}
//           {/* <ul className="list">
//               {watched.map((movie) => (
//                 <li key={movie.imdbID}>
//                   <img src={movie.Poster} alt={`${movie.Title} poster`} />
//                   <h3>{movie.Title}</h3>
//                   <div>
//                     <p>
//                       <span>⭐️</span>
//                       <span>{movie.imdbRating}</span>
//                     </p>
//                     <p>
//                       <span>🌟</span>
//                       <span>{movie.userRating}</span>
//                     </p>
//                     <p>
//                       <span>⏳</span>
//                       <span>{movie.runtime} min</span>
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ul> */}{" "}
//           {/* 108-0 commented to create a saparate component named WatchedMoviesList */}
//         </>
//       )}
//     </div>
//   );
// } /* 113 commented to replace WATCHBOX COMPONENT with BOX component which utilizes component compostion  */

function WatchedSummary({ watched }) /* 108-0 */ {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMoviesList({ watched }) /* 108-0 */ {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
        /> /* 108-0 */ /* 108-0 commented to make it into a separate component named WatchedMovie  */
        /* <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>⭐️</span>
                      <span>{movie.imdbRating}</span>
                    </p>
                    <p>
                      <span>🌟</span>
                      <span>{movie.userRating}</span>
                    </p>
                    <p>
                      <span>⏳</span>
                      <span>{movie.runtime} min</span>
                    </p>
                  </div>
                </li> */
      ))}
    </ul>
  );
}

function WatchedMovie({ movie }) /* 108-0 */ {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}

function Main({
  children,
}) /* 108-0 made main component */ /* 110-0 passed movies prop from app component */ /* 112 used children prop to implement component composition  */ {
  return (
    <main className="main">
      {children} {/* 112 implemented component composition  */}
      {/* <ListBox movies={movies}/> */} {/* 108-0 */}{" "}
      {/* 110-0 passed movies props from main to pass to MOVIE LIST APP  */}{" "}
      {/* 112 commented to implement component composition on  */}
      {/* <div className="box">
        <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
          {isOpen1 ? "–" : "+"}
        </button>
        {isOpen1 && (
          <ul className="list">
            {movies?.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div> */}{" "}
      {/* 108-0 commented to make it into a separate component named ListBox */}
      {/* <WatchedBox/> */} {/* 108-0 */} {/* 112 commented to implement component composition */}
      {/* <div className="box">
        <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && (
          <>
            <div className="summary">
              <h2>Movies you watched</h2>
              <div>
                <p>
                  <span>#️⃣</span>
                  <span>{watched.length} movies</span>
                </p>
                <p>
                  <span>⭐️</span>
                  <span>{avgImdbRating}</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>{avgUserRating}</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>{avgRuntime} min</span>
                </p>
              </div>
            </div>

            <ul className="list">
              {watched.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>⭐️</span>
                      <span>{movie.imdbRating}</span>
                    </p>
                    <p>
                      <span>🌟</span>
                      <span>{movie.userRating}</span>
                    </p>
                    <p>
                      <span>⏳</span>
                      <span>{movie.runtime} min</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div> */}{" "}
      {/* 108-0 commented to make it into a separate component named WatchedBox  */}
    </main>
  );
}

export default function App() {
  const [movies, setMovies] = useState(tempMovieData); /* 110-0 lifted state from MOVIE LIST COMPONENT  */
  const [watched, setWatched] = useState(tempWatchedData); /* 113 LIFTED STATE for BOX COMPONENT */
  // const [query, setQuery] = useState("");
  /* const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime)); */

  return (
    <>
      {/* <NavBar movies={movies} />  */}
      {/* 108-0 */} {/* 110-0 passed movie prop from app component */}{" "}
      {/* 112 commented to prevent props drilling of movies state to navbar component function using component composition technique */}
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>{" "}
      {/* 112 component composition to prevent props drilling by passing children prop to navbar component function  */}
      {/* <Main movies={movies} /> */} {/* 108-0 */} {/* 110-0 passed movies prop to pass to MOVIE LIST COMPONENT */}{" "}
      {/* 112 commented to implement component composition to prevent props drilling */}
      <Main>
        {/* <ListBox movies={movies}/> */}{" "}
        {/* 112 commented to implement component composition to prevent props drilling  */}
        {/* <ListBox>
          <MovieList movies={movies} />
        </ListBox>{" "} */}
        {/* 112 component composition technique implemented to prevent props drilling of movies state */}{" "}
        {/* 113 commented to implement component composition via another component named BOX COMPONENT  */}
        <Box>
          <MovieList movies={movies} />
        </Box>{" "}
        {/* 113 replaced listbox with box  */}
        {/* <WatchedBox /> */}{" "}
        {/* 113 commented to implement component composition via another component named BOX COMPONENT   */}
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>{" "} 
        {/* 113 replaced watchtebox with box component  */}
      </Main>{" "}
      {/* 112 implementing component composition  */}
      {/* <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav> */}{" "}
      {/* 108-0 commented... the code is taken to create a navbar component */}
      {/* <main className="main">
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "–" : "+"}
          </button>
          {isOpen1 && (
            <ul className="list">
              {movies?.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.Year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
          {isOpen2 && (
            <>
              <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                  <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                  </p>
                  <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                  </p>
                </div>
              </div>

              <ul className="list">
                {watched.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    <h3>{movie.Title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main> */}{" "}
      {/* 108-0 commented: the whole code is made into separate main component */}
    </>
  );
}
