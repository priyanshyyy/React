import { useState } from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import MovieRow from '../components/MovieRow';
import MovieModal from '../components/MovieModal';

function MyList() {
  const { list } = useWatchlist();
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div style={{ paddingTop: '100px' }}>
      <h2 style={{ padding: '0 20px' }}>My List</h2>

      {list.length > 0 ? (
        <MovieRow title="" movies={list} onMovieClick={setSelectedMovie} />
      ) : (
        <p style={{ padding: '0 20px' }}>Your list is empty. Add movies from Home or Search!</p>
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

export default MyList;