import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { jobs } from "../../data/jobs";

import {
  getUserApplications,
} from "../../services/application.service";

function Dashboard() {
  const { user } = useAuth();

  const applications = user
    ? getUserApplications(user.id)
    : [];

  const submittedCount = applications.filter(
    (application) =>
      application.status === "Submitted"
  ).length;

  const latestApplications = [...applications]
    .sort(
      (a, b) =>
        new Date(b.appliedAt) -
        new Date(a.appliedAt)
    )
    .slice(0, 3);

  return (
    <main className="dashboard-page">
      <div className="dashboard-container">

        {/* Welcome */}

        <section className="dashboard-welcome">
          <div>
            <span className="section-eyebrow">
              CANDIDATE DASHBOARD
            </span>

            <h1>
              Welcome back,{" "}
              {user?.firstName || "Candidate"} 👋
            </h1>

            <p>
              Keep track of your applications and
              discover your next opportunity.
            </p>
          </div>

          <Link
            to="/jobs"
            className="dashboard-primary-btn"
          >
            Find Jobs
          </Link>
        </section>

        {/* Stats */}

        <section className="dashboard-stats">

          <div className="dashboard-stat-card">
            <span className="dashboard-stat-icon">
              📄
            </span>

            <div>
              <strong>
                {applications.length}
              </strong>

              <span>
                Applications
              </span>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <span className="dashboard-stat-icon">
              ⏳
            </span>

            <div>
              <strong>
                {submittedCount}
              </strong>

              <span>
                Under Review
              </span>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <span className="dashboard-stat-icon">
              🔎
            </span>

            <div>
              <strong>
                {jobs.length}
              </strong>

              <span>
                Available Jobs
              </span>
            </div>
          </div>

        </section>

        {/* Main content */}

        <div className="dashboard-grid">

          {/* Applications */}

          <section className="dashboard-card dashboard-applications">

            <div className="dashboard-card-header">
              <div>
                <h2>
                  Recent Applications
                </h2>

                <p>
                  Your latest job applications
                </p>
              </div>

              <Link to="/applications">
                View all
              </Link>
            </div>

            {latestApplications.length === 0 ? (
              <div className="dashboard-empty">

                <div className="dashboard-empty-icon">
                  📄
                </div>

                <h3>
                  No applications yet
                </h3>

                <p>
                  Start applying for jobs that
                  match your skills.
                </p>

                <Link
                  to="/jobs"
                  className="dashboard-secondary-btn"
                >
                  Browse Jobs
                </Link>

              </div>
            ) : (
              <div className="dashboard-application-list">

                {latestApplications.map(
                  (application) => {
                    const job = jobs.find(
                      (item) =>
                        item.id ===
                        application.jobId
                    );

                    if (!job) {
                      return null;
                    }

                    const appliedDate =
                      new Date(
                        application.appliedAt
                      ).toLocaleDateString(
                        "en-NG",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      );

                    return (
                      <Link
                        key={application.id}
                        to={`/applications/${application.id}`}
                        className="dashboard-application-item"
                      >
                        <div className="dashboard-company-logo">
                          {job.company
                            ?.charAt(0)
                            ?.toUpperCase() || "J"}
                        </div>

                        <div className="dashboard-application-info">
                          <h3>
                            {job.title}
                          </h3>

                          <p>
                            {job.company} ·{" "}
                            {job.location}
                          </p>
                        </div>

                        <div className="dashboard-application-status">
                          <span>
                            {application.status}
                          </span>

                          <small>
                            {appliedDate}
                          </small>
                        </div>
                      </Link>
                    );
                  }
                )}

              </div>
            )}

          </section>

          {/* Profile summary */}

          <aside className="dashboard-card dashboard-profile-card">

            <div className="dashboard-profile-top">

              <div className="dashboard-avatar">
                {user?.firstName
                  ?.charAt(0)
                  ?.toUpperCase() || "C"}
              </div>

              <div>
                <h2>
                  {user?.firstName}{" "}
                  {user?.lastName}
                </h2>

                <p>
                  {user?.desiredRole ||
                    "Job Candidate"}
                </p>
              </div>

            </div>

            <div className="dashboard-profile-details">

              <div>
                <span>Location</span>
                <strong>
                  {user?.location ||
                    "Not specified"}
                </strong>
              </div>

              <div>
                <span>Experience</span>
                <strong>
                  {user?.experienceLevel ||
                    "Not specified"}
                </strong>
              </div>

              <div>
                <span>Email</span>
                <strong>
                  {user?.email}
                </strong>
              </div>

            </div>

            <Link
              to="/profile"
              className="dashboard-profile-btn"
            >
              View Profile
            </Link>

          </aside>

        </div>

      </div>
    </main>
  );
}

export default Dashboard;