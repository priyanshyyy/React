const KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function getTrending() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
  );
  const data = await res.json();
  return data.results;
}

export async function getTrailer(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${KEY}`
  );
  const data = await res.json();
  const trailer = data.results.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );
  return trailer ? trailer.key : null;
}

export async function searchMovies(query) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await res.json();
  return data.results;
}