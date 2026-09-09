import { useState, useEffect } from 'react';
import { getTrending } from '../api/tmdb';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import MovieModal from '../components/MovieModal';

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrending();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  if (isLoading) {
    return (
      <div className="skeleton-row">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="skeleton-card"></div>
        ))}
      </div>
    );
  }

  if (error) return <p className="empty-state">Error: {error}</p>;

  return (
    <div>
      <HeroBanner movie={movies[0]} />
      <MovieRow
        title="Trending Now"
        movies={movies}
        onMovieClick={setSelectedMovie}
      />

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default Home;