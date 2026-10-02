import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="brand">
          <div className="brand-mark">J</div>
          <span>JRP</span>
        </Link>

        {/* Navigation */}
        {!isAuthenticated && (
          <nav className="desktop-nav">
            <Link to="/jobs">
              For job seekers
            </Link>

            {/* <a href="/#features">
              Why JRP
            </a> */}

            {/* <a href="/#how-it-works">
              How It Works
            </a> */}

            <a href="/employer">
              For employers
            </a>
          </nav>
        )}

        {isAuthenticated && (
          <nav className="desktop-nav">
            <Link to="/jobs">
              Find Jobs
            </Link>

            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/applications">
              My Applications
            </Link>
          </nav>
        )}

        {/* Right side */}
        <div className="nav-actions">

          {isAuthenticated ? (
            <>
              <Link
                to="/profile"
                className="profile-nav-link"
                aria-label="Open profile"
              >
                <span className="profile-icon">
                  {user?.firstName?.charAt(0)?.toUpperCase() || "U"}
                </span>

                <span className="profile-name">
                  {user?.firstName || "Profile"}
                </span>
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

        <button
          type="button"
          className="mobile-menu"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;