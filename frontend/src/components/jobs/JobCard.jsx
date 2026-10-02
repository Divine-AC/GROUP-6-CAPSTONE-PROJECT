import { Link } from "react-router-dom";

function JobCard({ job, isSaved, onToggleSave }) {
  const postedDate = new Date(job.postedAt);

  const formattedDate = postedDate.toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const salary = `₦${job.salaryMin.toLocaleString()} - ₦${job.salaryMax.toLocaleString()}`;

  const experience =
    job.minExperience === job.maxExperience
      ? `${job.minExperience} years experience`
      : `${job.minExperience}–${job.maxExperience} years experience`;

  return (
    <article className="job-card">
      <div className="job-card-top">
        <div className="company-logo">
          {job.company?.charAt(0)?.toUpperCase() || "J"}
        </div>

        <div className="job-card-heading">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>

        <button
          type="button"
          className={`save-job-btn ${isSaved ? "saved" : ""}`}
          onClick={() => onToggleSave(job.id)}
          aria-label={
            isSaved
              ? `Unsave ${job.title}`
              : `Save ${job.title}`
          }
        >
          {isSaved ? "♥" : "♡"}
        </button>
      </div>

      <div className="job-meta">
        <span>{job.location}</span>
        <span>{job.employmentType}</span>
        <span>{job.workMode}</span>
      </div>

      <div className="job-tags">
        <span>{job.category}</span>
        <span>{experience}</span>
      </div>

      <p className="job-description">
        {job.description}
      </p>

      <div className="job-card-bottom">
        <div>
          <strong>{salary}</strong>
          <small>Posted {formattedDate}</small>
        </div>

        <Link
  to={`/jobs/${job.id}`}
  className="view-job-btn"
>
  View Details
</Link>
      </div>
    </article>
  );
}

export default JobCard;