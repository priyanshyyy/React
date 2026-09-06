import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">StreamFlix</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/my-list">My List</Link>
        <Link to="/search" className="navbar-search">🔍</Link>
      </div>
    </nav>
  );
}

export default Navbar;