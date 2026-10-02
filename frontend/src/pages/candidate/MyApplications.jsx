import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { jobs } from "../../data/jobs";

import {
  getUserApplications,
} from "../../services/application.service";

function MyApplications() {
  const { user } = useAuth();

  const applications = user
    ? getUserApplications(user.id)
    : [];

  return (
    <main className="applications-page">
      <div className="applications-container">
        <div className="applications-header">
          <span className="section-eyebrow">
            APPLICATIONS
          </span>

          <h1>My Applications</h1>

          <p>
            Track the jobs you have applied for.
          </p>
        </div>

        {applications.length === 0 ? (
          <section className="applications-empty">
            <h2>No applications yet</h2>

            <p>
              You haven't applied for any jobs yet.
            </p>

            <Link
              to="/jobs"
              className="view-job-btn"
            >
              Browse Jobs
            </Link>
          </section>
        ) : (
          <div className="applications-list">
            {applications.map((application) => {
              const job = jobs.find(
                (item) =>
                  item.id === application.jobId
              );

              if (!job) {
                return null;
              }

              const appliedDate =
                new Date(
                  application.appliedAt
                ).toLocaleDateString("en-NG", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                });

              return (
                <article
                  key={application.id}
                  className="application-card"
                >
                  <div>
                    <span className="section-eyebrow">
                      {job.category}
                    </span>

                    <h2>{job.title}</h2>

                    <p>
                      {job.company} ·{" "}
                      {job.location}
                    </p>
                  </div>

                  <div className="application-card-meta">
                    <span>
                      Status:{" "}
                      <strong>
                        {application.status}
                      </strong>
                    </span>

                    <span>
                      Applied: {appliedDate}
                    </span>
                  </div>

                  <Link
                    to={`/applications/${application.id}`}
                    className="view-job-btn"
                  >
                    View Application
                  </Link>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export default MyApplications;