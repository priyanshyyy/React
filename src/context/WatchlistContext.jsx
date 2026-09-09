import { createContext, useState, useEffect, useContext } from 'react';

const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(list));
  }, [list]);

  const addToList = (movie) => {
    setList((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev; // avoid duplicates
      return [...prev, movie];
    });
  };

  const removeFromList = (movieId) => {
    setList((prev) => prev.filter((m) => m.id !== movieId));
  };

  const isInList = (movieId) => list.some((m) => m.id === movieId);

  return (
    <WatchlistContext.Provider value={{ list, addToList, removeFromList, isInList }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  return useContext(WatchlistContext);
}