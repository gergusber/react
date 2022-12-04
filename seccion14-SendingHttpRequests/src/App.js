import React, { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)
  const fetchMoviesHandler = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://swapi.py4e.com/api/films');
      if (!response.ok) {
        throw new Error('something went wrong')
      }

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
    } catch (error) {
      setError(error.message)
    }
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
        {!isLoading && movies.length === 0 && !error && <p>Found not movies.</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}

      </section>
    </React.Fragment>
  );
}

export default App;
