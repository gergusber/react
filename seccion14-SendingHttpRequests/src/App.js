import React, { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const fetchMoviesHandler = () => {
    fetch('https://swapi.py4e.com/api/films')
      .then(response => { return response.json() })
      .then(
        (res) => {
          const data = res.results.map(x => {
            return {
              id: x.episode_id,
              title: x.title,
              openingText: x.opening_crawl,
              releaseDate: x.release_date
            }
          })
          setMovies(data)
        }
      )
  }

  // useEffect(() => {
  //   fetchMoviesHandler()
  // }, [fetchMoviesHandler])


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
