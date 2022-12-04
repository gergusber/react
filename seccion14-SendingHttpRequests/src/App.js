import React, { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchMoviesHandler = async () => {
    setIsLoading(true)
    const response = await fetch('https://swapi.py4e.com/api/films');
    const data = await response.json()
    const transformedMovies = data.results.map(x => {
      return {
        id: x.episode_id,
        title: x.title,
        openingText: x.opening_crawl,
        releaseDate: x.release_date
      }
    })
    setMovies(transformedMovies)
    setIsLoading(false)
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
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found not movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
