import { Link, useParams } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { jobs } from "../../data/jobs";

import {
  getApplicationById,
} from "../../services/application.service";

function ApplicationDetails() {
  const { applicationId } = useParams();
  const { user } = useAuth();

  const application =
    getApplicationById(applicationId);

  if (
    !application ||
    application.userId !== user?.id
  ) {
    return (
      <main className="job-details-page">
        <div className="job-details-not-found">
          <span className="section-eyebrow">
            APPLICATION
          </span>

          <h1>Application not found</h1>

          <p>
            We couldn't find this application.
          </p>

          <Link
            to="/applications"
            className="back-to-jobs-btn"
          >
            My Applications
          </Link>
        </div>
      </main>
    );
  }

  const job = jobs.find(
    (item) => item.id === application.jobId
  );

  if (!job) {
    return (
      <main className="job-details-page">
        <div className="job-details-not-found">
          <h1>Job not found</h1>

          <p>
            The job connected to this application no
            longer exists.
          </p>

          <Link
            to="/applications"
            className="back-to-jobs-btn"
          >
            My Applications
          </Link>
        </div>
      </main>
    );
  }

  const appliedDate =
    new Date(
      application.appliedAt
    ).toLocaleDateString("en-NG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <main className="application-details-page">
      <div className="application-details-container">
        <Link
          to="/applications"
          className="back-to-jobs"
        >
          ← My Applications
        </Link>

        <div className="application-header">
          <span className="section-eyebrow">
            APPLICATION DETAILS
          </span>

          <h1>{job.title}</h1>

          <p>
            {job.company} · {job.location}
          </p>
        </div>

        <div className="application-details-card">
          <div className="application-status">
            <span>Status</span>

            <strong>
              {application.status}
            </strong>
          </div>

          <div className="application-detail-item">
            <span>Applicant</span>
            <strong>
              {application.applicantName}
            </strong>
          </div>

          <div className="application-detail-item">
            <span>Email</span>
            <strong>
              {application.applicantEmail}
            </strong>
          </div>

          <div className="application-detail-item">
            <span>Phone</span>
            <strong>
              {application.phone}
            </strong>
          </div>

          <div className="application-detail-item">
            <span>Date applied</span>
            <strong>
              {appliedDate}
            </strong>
          </div>

          <div className="application-cover-letter">
            <h2>Cover Letter</h2>

            <p>
              {application.coverLetter}
            </p>
          </div>

          <div className="application-job-info">
            <h2>Job</h2>

            <p>
              <strong>{job.title}</strong>
            </p>

            <p>
              {job.company} · {job.location}
            </p>

            <Link
              to={`/jobs/${job.id}`}
              className="view-job-btn"
            >
              View Job
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ApplicationDetails;