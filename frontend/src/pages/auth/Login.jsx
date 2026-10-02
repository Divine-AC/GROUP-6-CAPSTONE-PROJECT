import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const returnTo =
    location.state?.from || "/dashboard";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    const result = login(
      formData.email.trim(),
      formData.password
    );

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(returnTo, {
      replace: true,
    });
  };

  return (
    <main className="auth-page">
      <div className="auth-container">

        <div className="auth-brand">
          <Link to="/" className="brand">
            <div className="brand-mark">J</div>
            <span>JRP</span>
          </Link>
        </div>

        <div className="auth-card">

          <div className="auth-header">
            <span className="section-eyebrow">
              WELCOME BACK
            </span>

            <h1>
              Log in to your account
            </h1>

            <p>
              Continue your job search and manage
              your applications.
            </p>
          </div>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />
            </div>

            <button
              type="submit"
              className="auth-submit-btn"
            >
              Log In
            </button>

          </form>

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}

              <Link
                to="/signup"
                state={{
                  from: returnTo,
                }}
              >
                Create one
              </Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Login;