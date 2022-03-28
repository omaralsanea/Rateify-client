import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { isAdmin, getLoggedInUserId } from '../lib/auth';

const Navbar = () => {
  const [isAdminState, setIsAdminState] = useState(isAdmin());
  let location = useLocation();
  const navigate = useNavigate();

  // ! Because react isn't local/sessionStorage aware, here we make sure that whenever
  // ! the route changes, we check if the user is an admin again, and update our
  // ! state if the user logs in with an admin.

  // ! If we didn't do this, and you logged in as an admin, the navbar still wouldn't
  // ! show 'create', as React does not know to re-render the Navbar. This code gets
  // ! around that problem, so the UI updates straight away.
  useEffect(() => {
    // ! Re-compute the admin state on this component whenever route (location) changes.
    setIsAdminState(isAdmin());
  }, [location]);

  const logout = () => {
    sessionStorage.removeItem('token');
    setIsAdminState(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/artists" className="navbar-item">
          Artists
        </Link>
        <Link to="/releases" className="navbar-item">
          Releases
        </Link>
        {/* // ! If the user is an admin, we show the /create page */}
        {isAdminState && (
          <Link to="/create" className="navbar-item">
            Create
          </Link>
        )}
        <Link to="/login" className="navbar-item">
          Login
        </Link>
        {/* // ! If logged in, can show the option to log out. */}
        {getLoggedInUserId() && (
          <div className="navbar-item" onClick={logout}>
            Logout
          </div>
        )}
        <Link to="/register" className="navbar-item">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
