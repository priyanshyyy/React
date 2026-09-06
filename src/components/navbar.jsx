function navbar({ onSearchClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">StreamFlix</div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/my-list">My List</a>
        <span className="navbar-search" onClick={onSearchClick}>🔍</span>
      </div>
    </nav>
  );
}

export default navbar;