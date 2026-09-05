function HeroBanner({ movie }) {
  if (!movie) return null;

  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="hero-gradient"></div>
      <div className="hero-overlay">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default HeroBanner;