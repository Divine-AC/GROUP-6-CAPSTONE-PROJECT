function MyJobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Lagos, Nigeria",
      type: "Full-time",
      applications: 18,
      status: "Active",
      date: "Oct 2, 2026",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Remote",
      type: "Full-time",
      applications: 12,
      status: "Active",
      date: "Sep 28, 2026",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Abuja, Nigeria",
      type: "Contract",
      applications: 9,
      status: "Closed",
      date: "Sep 20, 2026",
    },
  ];

  return (
    <div className="employer-page">
      <div className="employer-page-container">
        <div className="employer-page-header employer-my-jobs-header">
          <div>
            <h1>My Jobs</h1>
            <p>Manage the jobs you have posted.</p>
          </div>

          <a href="/employer/post-job" className="employer-primary-button">
            + Post a Job
          </a>
        </div>

        <div className="employer-jobs-list">
          {jobs.map((job) => (
            <div className="employer-job-card" key={job.id}>
              <div className="employer-job-card-main">
                <div>
                  <h2>{job.title}</h2>
                  <p className="employer-job-location">{job.location}</p>

                  <div className="employer-job-meta">
                    <span>{job.type}</span>
                    <span>{job.applications} Applications</span>
                    <span>Posted {job.date}</span>
                  </div>
                </div>

                <span
                  className={
                    job.status === "Active"
                      ? "employer-status-active"
                      : "employer-status-closed"
                  }
                >
                  {job.status}
                </span>
              </div>

              <div className="employer-job-card-actions">
                <a href={`/employer/edit-job/${job.id}`}>Edit</a>

                <a href={`/employer/applications/${job.id}`}>
                  View Applications
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyJobs;
