import { useEffect, useState } from "react";

const KEY = '78d210c9' // 142-1

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

export default function App() {
  const [movies, setMovies] = useState([]); /* 110-0 lifted state from MOVIE LIST COMPONENT  */
  const [watched, setWatched] = useState([]); 

  const [errorMessage, setErrorMessage] = useState('') /* 147-1 */

  const QUERY = 'vbcvb' // 145-1

  const [isLoading, setIsLoading] = useState(false) /* 146 state to show LOADING... in the when at the time when API CALL FETCHES data from the backend */

  /* fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
  .then(res => res.json())
  .then(data => console.log(data)) */
    /* 142-1 */ /* console o/p: 
Object { Search: (10) […], totalResults: "37", Response: "True" }
​
Response: "True"
​
Search: Array(10) [ {…}, {…}, {…}, … ]
​
totalResults: "37"
​
<prototype>: Object { … } */

useEffect(() => {

  async function fetch_searched_movie(){

    try /* 147-1 try-catch-finally block */ {

      setIsLoading(true) // 146

      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${QUERY}`) /* 145-1 */

      
      if (!res.ok) throw new Error('no response from the api') /* 147-1 */
      
      const data = await res.json() /* 145-1 **** DON'T FORGET AWAIT*/

      if(data.Response === "False") throw new Error(data.Error)
  
      setMovies(data.Search) /* 145-1 */
  
      console.log(data.Search) /* 145-1 DON'T CONSOLE.LOG(MOVIES).... it'll only return  */
  
      
    } catch (err) {
      
      console.error(err.message) /* 147-1 ** DIDN
      T WORK */
      
      setErrorMessage(err.message)
      
      
      
    } finally {
      
      setIsLoading(false) // 146 /* 147-1 moved setLoading(False) to finally block.... because this is a MANDATORY LINE to be executed */
    } 


  } /* 145-1 */

  fetch_searched_movie() /* 145-1 ***** never forget to call the async function  */

}, []) /* 145-1 */



  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>{" "}
      <Main>
        <Box>
          {/* {isLoading? <Loader/> :<MovieList movies={movies} />} */
          }
          {isLoading && <Loader/>} {/* 147-1 */}
          {errorMessage && <ErrorMessage message={errorMessage}/>} {/* 147-1 */}
          {!errorMessage && <MovieList movies={movies}/>} {/* 147-1 */}
        </Box>{" "}
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>{" "} 
      </Main>
    </>
  );
}

function ErrorMessage({message}) {

  return <p className="error">
    <span>⛔{message}</span>
  </p>
} {/* 147-1 */}


function Loader() {
  return <p className='loader'>Loading...</p>
}

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
        {children}
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
        /> 
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
} 

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
        />
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
      {children}
      {/* 108-0 commented to make it into a separate component named WatchedBox  */}
    </main>
  );
}



