import {
  Link,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { jobs } from "../../data/jobs";

function JobDetails() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated } = useAuth();

  /*
    Normalize the URL value before comparing it with the job ID.
    This makes the lookup more reliable.
  */
  const normalizedJobId = decodeURIComponent(jobId || "")
    .trim()
    .toLowerCase();

  const job = jobs.find(
    (item) =>
      String(item.id).trim().toLowerCase() === normalizedJobId
  );

  /*
    Show a friendly error if the job doesn't exist.
  */
  if (!job) {
    return (
      <main className="job-details-page">
        <div className="job-details-not-found">
          <span className="section-eyebrow">JOB OPPORTUNITY</span>

          <h1>Job not found</h1>

          <p>
            The job you're looking for may have been removed or
            does not exist.
          </p>

          <Link to="/jobs" className="back-to-jobs-btn">
            Browse Jobs
          </Link>
        </div>
      </main>
    );
  }

  const postedDate = new Date(job.postedAt).toLocaleDateString(
    "en-NG",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const salary = `₦${job.salaryMin.toLocaleString()} - ₦${job.salaryMax.toLocaleString()}`;

  const experience =
    job.minExperience === job.maxExperience
      ? `${job.minExperience} years`
      : `${job.minExperience}–${job.maxExperience} years`;

  /*
    Save / unsave the job using the same localStorage system
    already used on the Browse Jobs page.
  */
  const handleSave = () => {
    try {
      const savedJobs =
        JSON.parse(localStorage.getItem("jrp-saved-jobs")) || [];

      const isSaved = savedJobs.includes(job.id);

      const updatedJobs = isSaved
        ? savedJobs.filter((id) => id !== job.id)
        : [...savedJobs, job.id];

      localStorage.setItem(
        "jrp-saved-jobs",
        JSON.stringify(updatedJobs)
      );

      alert(
        isSaved
          ? "Job removed from saved jobs."
          : "Job saved successfully."
      );
    } catch {
      alert("Unable to update saved jobs.");
    }
  };

  /*
    Authentication will be connected during the Authentication phase.
  */
 const handleApply = () => {
  if (!isAuthenticated) {
    navigate("/login", {
      state: {
        from: location.pathname,
      },
    });

    return;
  }

  navigate(`/jobs/${job.id}/apply`);
};

  return (
    <main className="job-details-page">
      <div className="job-details-container">

        {/* Back navigation */}
        <Link to="/jobs" className="back-to-jobs">
          ← Back to Jobs
        </Link>

        {/* Job Header */}
        <section className="job-details-header">

          <div className="company-logo job-details-logo">
            {job.company?.charAt(0)?.toUpperCase() || "J"}
          </div>

          <div className="job-details-title">

            <p className="job-details-category">
              {job.category}
            </p>

            <h1>{job.title}</h1>

            <p className="job-details-company">
              {job.company}
            </p>

            <div className="job-details-meta">
              <span>📍 {job.location}</span>
              <span>💼 {job.employmentType}</span>
              <span>🏢 {job.workMode}</span>
            </div>

          </div>
        </section>

        <div className="job-details-layout">

          {/* Main content */}
          <div className="job-details-main">

            {/* Description */}
            <section className="job-details-section">
              <h2>Job Description</h2>

              <p>{job.description}</p>
            </section>

            {/* Responsibilities */}
            <section className="job-details-section">
              <h2>Responsibilities</h2>

              <ul>
                {(job.responsibilities || []).map(
                  (responsibility, index) => (
                    <li key={index}>
                      {responsibility}
                    </li>
                  )
                )}
              </ul>
            </section>

            {/* Requirements */}
            <section className="job-details-section">
              <h2>Requirements</h2>

              <ul>
                {(job.requirements || []).map(
                  (requirement, index) => (
                    <li key={index}>
                      {requirement}
                    </li>
                  )
                )}
              </ul>
            </section>

            {/* Skills */}
            <section className="job-details-section">
              <h2>Skills</h2>

              <div className="job-details-skills">
                {(job.skills || []).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="job-details-section">
              <h2>Benefits</h2>

              <ul>
                {(job.benefits || []).map(
                  (benefit, index) => (
                    <li key={index}>{benefit}</li>
                  )
                )}
              </ul>
            </section>

            {/* About role */}
            <section className="job-details-section">
              <h2>About the Role</h2>

              <p>
                This position offers an opportunity to work
                with a professional team while developing
                practical experience in the role.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="job-details-sidebar">

            {/* Actions */}
            <div className="job-action-card">

              <button
                type="button"
                className="apply-job-btn"
                onClick={handleApply}
              >
                Apply Now
              </button>

              <button
                type="button"
                className="save-details-btn"
                onClick={handleSave}
              >
                ♡ Save Job
              </button>

            </div>

            {/* Summary */}
            <div className="job-summary-card">

              <h3>Job Summary</h3>

              <div className="summary-item">
                <span>Salary</span>
                <strong>{salary}</strong>
              </div>

              <div className="summary-item">
                <span>Experience</span>
                <strong>{experience}</strong>
              </div>

              <div className="summary-item">
                <span>Location</span>
                <strong>{job.location}</strong>
              </div>

              <div className="summary-item">
                <span>Employment</span>
                <strong>{job.employmentType}</strong>
              </div>

              <div className="summary-item">
                <span>Work mode</span>
                <strong>{job.workMode}</strong>
              </div>

              <div className="summary-item">
                <span>Posted</span>
                <strong>{postedDate}</strong>
              </div>

            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}

export default JobDetails;