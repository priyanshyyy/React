import { useState, useEffect } from 'react';
import { getTrending, getMoviesByGenre } from '../api/tmdb';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import MovieModal from '../components/MovieModal';

const GENRES = [
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 27, name: 'Horror' },
  { id: 10749, name: 'Romance' },
  { id: 16, name: 'Animation' },
];

function Home() {
  const [trending, setTrending] = useState([]);
  const [genreMovies, setGenreMovies] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        const trendingData = await getTrending();
        setTrending(trendingData);

        const genreResults = {};
        for (const genre of GENRES) {
          genreResults[genre.name] = await getMoviesByGenre(genre.id);
        }
        setGenreMovies(genreResults);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAll();
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
      <HeroBanner movie={trending[0]} />

      <MovieRow
        title="Trending Now"
        movies={trending}
        onMovieClick={setSelectedMovie}
      />

      {GENRES.map((genre) => (
        <MovieRow
          key={genre.id}
          title={genre.name}
          movies={genreMovies[genre.name] || []}
          onMovieClick={setSelectedMovie}
        />
      ))}

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