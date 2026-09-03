const KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function getTrending() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
  );
  const data = await res.json();
  return data.results;
}