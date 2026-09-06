import MovieCard from './MovieCard';

function MovieRow({ title, movies, onMovieClick }) {
  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;