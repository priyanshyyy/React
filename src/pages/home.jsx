import { useState, useEffect } from 'react';
import { getTrending } from '../api/tmdb';

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrending();
        setMovies(data);
        console.log('Trending movies:', data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  if (isLoading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return <div>Check your console for movie data!</div>;
}

export default Home;