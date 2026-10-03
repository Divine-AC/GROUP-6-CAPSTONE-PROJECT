function AdminJobs() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Company",
      location: "Lagos, Nigeria",
      type: "Full-time",
      applications: 18,
      status: "Active",
      date: "Oct 2, 2026",
    },
    {
      title: "Backend Developer",
      company: "Digital Solutions",
      location: "Remote",
      type: "Full-time",
      applications: 12,
      status: "Active",
      date: "Sep 28, 2026",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Abuja, Nigeria",
      type: "Contract",
      applications: 9,
      status: "Closed",
      date: "Sep 20, 2026",
    },
    {
      title: "Cybersecurity Analyst",
      company: "SecureTech",
      location: "Lagos, Nigeria",
      type: "Full-time",
      applications: 15,
      status: "Active",
      date: "Sep 18, 2026",
    },
    {
      title: "Python Developer",
      company: "Digital Solutions",
      location: "Remote",
      type: "Part-time",
      applications: 7,
      status: "Closed",
      date: "Sep 15, 2026",
    },
  ];

  return (
    <div className="admin-jobs">
      <div className="admin-jobs-container">
        <div className="admin-jobs-header">
          <div>
            <h1>Manage Jobs</h1>
            <p>View and manage jobs posted by employers.</p>
          </div>
        </div>

        <div className="admin-jobs-card">
          <div className="admin-jobs-top">
            <div>
              <h2>All Jobs</h2>
              <p>{jobs.length} jobs currently displayed</p>
            </div>

            <input
              type="text"
              placeholder="Search jobs..."
              className="admin-job-search"
            />
          </div>

          <div className="admin-jobs-list">
            <div className="admin-jobs-table-header">
              <span>Job</span>
              <span>Location</span>
              <span>Type</span>
              <span>Applications</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            {jobs.map((job) => (
              <div className="admin-job-row" key={job.title}>
                <div className="admin-job-info">
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                  <small>Posted {job.date}</small>
                </div>

                <span className="admin-job-location">{job.location}</span>

                <span className="admin-job-type">{job.type}</span>

                <span className="admin-job-applications">
                  {job.applications}
                </span>

                <span
                  className={
                    job.status === "Active"
                      ? "admin-job-status-active"
                      : "admin-job-status-closed"
                  }
                >
                  {job.status}
                </span>

                <button
                  className="admin-job-action"
                  onClick={() => alert(`Managing ${job.title}`)}
                >
                  Manage
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminJobs;
