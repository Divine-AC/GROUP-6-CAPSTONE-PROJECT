import { useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import { useAuth } from "../../context/AuthContext";
import { jobs } from "../../data/jobs";

import {
  createApplication,
  hasApplied,
} from "../../services/application.service";

function ApplyJob() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  const job = jobs.find(
    (item) => String(item.id) === String(jobId)
  );

  const [formData, setFormData] = useState({
    phone: "",
    coverLetter: "",
  });

  const [error, setError] = useState("");

  if (!job) {
    return (
      <>
        <Navbar />

        <main className="job-details-page">
          <div className="job-details-not-found">
            <span className="section-eyebrow">
              APPLICATION
            </span>

            <h1>Job not found</h1>

            <p>
              The job you're trying to apply for does not
              exist.
            </p>

            <Link
              to="/jobs"
              className="back-to-jobs-btn"
            >
              Browse Jobs
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

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

    if (!user) {
      navigate("/login", {
        state: {
          from: `/jobs/${job.id}/apply`,
        },
      });

      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!formData.coverLetter.trim()) {
      setError("Please enter a short cover letter.");
      return;
    }

    if (hasApplied(job.id, user.id)) {
      setError(
        "You have already applied for this job."
      );

      return;
    }

    try {
      const application = createApplication({
        jobId: job.id,
        userId: user.id,
        applicantName:
          `${user.firstName || ""} ${
            user.lastName || ""
          }`.trim(),
        applicantEmail: user.email || "",
        phone: formData.phone.trim(),
        coverLetter: formData.coverLetter.trim(),
      });

      navigate(
        `/applications/${application.id}`,
        {
          replace: true,
        }
      );
    } catch {
      setError(
        "Unable to submit your application. Please try again."
      );
    }
  };

  return (
    <>
      <Navbar />

      <main className="apply-page">
        <div className="apply-container">

          {/* Back link */}
          <Link
            to={`/jobs/${job.id}`}
            className="apply-back-link"
          >
            ← Back to Job Details
          </Link>

          {/* Page heading */}
          <div className="apply-page-header">
            <span className="section-eyebrow">
              JOB APPLICATION
            </span>

            <h1>Apply for this position</h1>

            <p>
              Complete the form below to submit your
              application.
            </p>
          </div>

          <div className="apply-layout">

            {/* Main application form */}
            <section className="apply-form-card">

              <div className="apply-form-heading">
                <div className="apply-company-logo">
                  {job.company
                    ?.charAt(0)
                    ?.toUpperCase() || "J"}
                </div>

                <div>
                  <h2>{job.title}</h2>

                  <p>
                    {job.company} · {job.location}
                  </p>
                </div>
              </div>

              <div className="apply-divider" />

              <div className="apply-section-heading">
                <h3>Your Information</h3>

                <p>
                  Your account information will be
                  included with your application.
                </p>
              </div>

              {error && (
                <div className="apply-error">
                  {error}
                </div>
              )}

              <form
                className="apply-form"
                onSubmit={handleSubmit}
              >

                {/* Full name */}
                <div className="apply-form-group">
                  <label htmlFor="name">
                    Full name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={`${user?.firstName || ""} ${
                      user?.lastName || ""
                    }`.trim()}
                    disabled
                  />

                  <small>
                    This information comes from your
                    account.
                  </small>
                </div>

                {/* Email */}
                <div className="apply-form-group">
                  <label htmlFor="email">
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={user?.email || ""}
                    disabled
                  />

                  <small>
                    Employers will use this email to
                    contact you.
                  </small>
                </div>

                {/* Phone */}
                <div className="apply-form-group">
                  <label htmlFor="phone">
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="08012345678"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Cover letter */}
                <div className="apply-form-group">
                  <div className="apply-label-row">
                    <label htmlFor="coverLetter">
                      Cover letter
                    </label>

                    <span>
                      Required
                    </span>
                  </div>

                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows="10"
                    placeholder="Introduce yourself and briefly explain why you're a good fit for this position..."
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                  />

                  <small>
                    Keep your cover letter clear,
                    relevant and concise.
                  </small>
                </div>

                {/* Submit */}
                <div className="apply-submit-area">
                  <button
                    type="submit"
                    className="apply-submit-btn"
                  >
                    Submit Application
                  </button>

                  <p>
                    By submitting this application,
                    you confirm that the information
                    provided is accurate.
                  </p>
                </div>

              </form>
            </section>

            {/* Job summary */}
            <aside className="apply-sidebar">

              <div className="apply-job-card">

                <div className="apply-job-card-heading">
                  <span className="section-eyebrow">
                    POSITION
                  </span>

                  <h2>{job.title}</h2>

                  <p>{job.company}</p>
                </div>

                <div className="apply-job-info">

                  <div className="apply-job-info-item">
                    <span>Location</span>
                    <strong>
                      {job.location}
                    </strong>
                  </div>

                  <div className="apply-job-info-item">
                    <span>Employment</span>
                    <strong>
                      {job.employmentType}
                    </strong>
                  </div>

                  <div className="apply-job-info-item">
                    <span>Work mode</span>
                    <strong>
                      {job.workMode}
                    </strong>
                  </div>

                  <div className="apply-job-info-item">
                    <span>Experience</span>
                    <strong>
                      {job.minExperience ===
                      job.maxExperience
                        ? `${job.minExperience} years`
                        : `${job.minExperience}–${job.maxExperience} years`}
                    </strong>
                  </div>

                  <div className="apply-job-info-item">
                    <span>Salary</span>
                    <strong>
                      ₦
                      {job.salaryMin.toLocaleString()}
                      {" - "}
                      ₦
                      {job.salaryMax.toLocaleString()}
                    </strong>
                  </div>

                </div>

                <Link
                  to={`/jobs/${job.id}`}
                  className="apply-view-job"
                >
                  View Full Job Details →
                </Link>

              </div>

              {/* Application tips */}
              <div className="apply-tips-card">

                <h3>Application Tips</h3>

                <ul>
                  <li>
                    Keep your cover letter relevant
                    to the position.
                  </li>

                  <li>
                    Highlight skills related to the
                    job requirements.
                  </li>

                  <li>
                    Double-check your phone number
                    before submitting.
                  </li>
                </ul>

              </div>

            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ApplyJob;