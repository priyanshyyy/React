import { useState, useEffect } from 'react';
import { searchMovies } from '../api/tmdb';
import { useDebounce } from '../hooks/useDebounce';
import SearchBar from '../components/SearchBar';
import MovieRow from '../components/MovieRow';
import MovieModal from '../components/MovieModal';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    async function fetchResults() {
      const data = await searchMovies(debouncedQuery);
      setResults(data);
    }
    fetchResults();
  }, [debouncedQuery]);

  return (
    <div style={{ paddingTop: '100px' }}>
      <SearchBar value={query} onChange={setQuery} />

      {results.length > 0 ? (
        <MovieRow
          title={`Results for "${debouncedQuery}"`}
          movies={results}
          onMovieClick={setSelectedMovie}
        />
      ) : (
        debouncedQuery && <p className="empty-state">No results found.</p>
      )}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default Search;