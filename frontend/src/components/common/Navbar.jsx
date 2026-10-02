import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <div className="brand-mark">J</div>
          <span>JRP</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/jobs">Find Jobs</Link>
          <a href="/#features">Why JRP</a>
          <a href="/#how-it-works">How It Works</a>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="login-btn"
              >
                {user?.firstName || "Dashboard"}
              </Link>

              <button
                type="button"
                className="signup-btn"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="login-btn"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="signup-btn"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu"
          onClick={() =>
            setIsMenuOpen((previous) => !previous)
          }
          aria-label={
            isMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          {isAuthenticated ? (
            <>
              <Link
                to="/jobs"
                onClick={closeMenu}
              >
                Find Jobs
              </Link>

              <Link
                to="/dashboard"
                onClick={closeMenu}
              >
                Dashboard
              </Link>

              <Link
                to="/applications"
                onClick={closeMenu}
              >
                My Applications
              </Link>

              <Link
                to="/profile"
                onClick={closeMenu}
              >
                Profile
              </Link>

              <button
                type="button"
                className="mobile-logout"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={closeMenu}
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="mobile-signup"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;

