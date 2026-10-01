function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="brand footer-logo">
              <div className="brand-mark">J</div>
              <span>JRP</span>
            </a>

            <p>
              Connecting job seekers with opportunities and helping employers
              discover talent.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <a href="#jobs">Find Jobs</a>
              <a href="#">For Employers</a>
              <a href="#">How It Works</a>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 JRP. All rights reserved.</p>

          <p className="demo-notice">
            JRP is an educational capstone project. Listings and testimonials
            shown are illustrative.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;