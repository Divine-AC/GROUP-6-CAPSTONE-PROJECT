function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="brand">
          <div className="brand-mark">J</div>
          <span>JRP</span>
        </a>

        <nav className="desktop-nav">
          <a href="#jobs">Find Jobs</a>
          <a href="#features">Why JRP</a>
          <a href="#how-it-works">How It Works</a>
        </nav>

        <div className="nav-actions">
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Get Started</button>
        </div>

        <button className="mobile-menu" aria-label="Open menu">
          ☰
        </button>
      </div>
    </header>
  );
}

export default Navbar;