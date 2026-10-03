function Dashboard() {
  const stats = [
    { title: "Total Jobs", value: "12" },
    { title: "Active Jobs", value: "8" },
    { title: "Applications", value: "47" },
    { title: "Pending Review", value: "15" },
  ];

  const recentJobs = [
    {
      title: "Frontend Developer",
      location: "Lagos, Nigeria",
      applications: 18,
      status: "Active",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      applications: 12,
      status: "Active",
    },
    {
      title: "UI/UX Designer",
      location: "Abuja, Nigeria",
      applications: 9,
      status: "Closed",
    },
  ];

  const recentApplications = [
    {
      name: "John Doe",
      job: "Frontend Developer",
      date: "Oct 2, 2026",
      status: "Pending",
    },
    {
      name: "Sarah Johnson",
      job: "Backend Developer",
      date: "Oct 1, 2026",
      status: "Reviewed",
    },
    {
      name: "Michael Smith",
      job: "UI/UX Designer",
      date: "Sep 30, 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="employer-dashboard">
      <div className="employer-dashboard-container">
        {/* Header */}
        <div className="employer-dashboard-header">
          <div>
            <h1>Employer Dashboard</h1>
            <p>Manage your jobs and applications from one place.</p>
          </div>

          <a href="/employer/post-job" className="employer-primary-button">
            + Post a Job
          </a>
        </div>

        {/* Statistics */}
        <div className="employer-stats">
          {stats.map((stat) => (
            <div className="employer-stat-card" key={stat.title}>
              <p>{stat.title}</p>
              <h2>{stat.value}</h2>
            </div>
          ))}
        </div>

        {/* Recent Jobs */}
        <div className="employer-dashboard-card">
          <div className="employer-card-header">
            <div>
              <h2>Recent Jobs</h2>
              <p>Your recently posted jobs</p>
            </div>

            <a href="/employer/my-jobs">View All</a>
          </div>

          <div className="employer-job-table">
            {recentJobs.map((job) => (
              <div className="employer-job-item" key={job.title}>
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.location}</p>
                </div>

                <div>
                  <span>{job.applications} applications</span>
                </div>

                <div>
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
              </div>
            ))}
          </div>
        </div>

        {/* Recent Applications */}
        <div className="employer-dashboard-card">
          <div className="employer-card-header">
            <div>
              <h2>Recent Applications</h2>
              <p>Latest applications received</p>
            </div>

            <a href="/employer/applications">View All</a>
          </div>

          <div className="employer-application-list">
            {recentApplications.map((application) => (
              <div
                className="employer-application-item"
                key={`${application.name}-${application.job}`}
              >
                <div>
                  <h3>{application.name}</h3>
                  <p>{application.job}</p>
                </div>

                <div>
                  <p>{application.date}</p>
                </div>

                <span
                  className={
                    application.status === "Pending"
                      ? "employer-status-pending"
                      : "employer-status-reviewed"
                  }
                >
                  {application.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="employer-dashboard-card">
          <div className="employer-card-header">
            <div>
              <h2>Quick Actions</h2>
              <p>Common employer actions</p>
            </div>
          </div>

          <div className="employer-quick-actions">
            <a href="/employer/post-job">Post a Job</a>
            <a href="/employer/my-jobs">Manage My Jobs</a>
            <a href="/employer/applications">View Applications</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
