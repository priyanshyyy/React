import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, loginWithGoogle, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">StreamFlix</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/my-list">My List</Link>
        <Link to="/search" className="navbar-search">🔍</Link>

        {user ? (
          <div className="navbar-user">
            <img src={user.photoURL} alt={user.displayName} className="navbar-avatar" />
            <button onClick={logout} className="navbar-auth-btn">Logout</button>
          </div>
        ) : (
          <button onClick={loginWithGoogle} className="navbar-auth-btn">
            Sign in with Google
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;