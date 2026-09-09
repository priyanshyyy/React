import { useState, useEffect } from 'react';
import { getTrailer } from '../api/tmdb';
import { useWatchlist } from '../context/WatchlistContext';

function MovieModal({ movie, onClose }) {
  const [trailerKey, setTrailerKey] = useState(null);
  const { addToList, removeFromList, isInList } = useWatchlist();
  const inList = isInList(movie.id);

  useEffect(() => {
    async function fetchTrailer() {
      const key = await getTrailer(movie.id);
      setTrailerKey(key);
    }
    fetchTrailer();
  }, [movie.id]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {trailerKey ? (
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Trailer"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No trailer available.</p>
        )}

        <h2>{movie.title}</h2>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p><strong>Release date:</strong> {movie.release_date}</p>
        <p>{movie.overview}</p>

        <button
          className="watchlist-btn"
          onClick={() => (inList ? removeFromList(movie.id) : addToList(movie))}
        >
          {inList ? '✓ Remove from My List' : '+ Add to My List'}
        </button>
      </div>
    </div>
  );
}

export default MovieModal;