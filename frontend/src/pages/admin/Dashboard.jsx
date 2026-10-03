function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "248",
    },
    {
      title: "Total Jobs",
      value: "86",
    },
    {
      title: "Applications",
      value: "534",
    },
    {
      title: "Pending Reviews",
      value: "32",
    },
  ];

  const recentUsers = [
    {
      name: "John Doe",
      email: "john@email.com",
      role: "Candidate",
      date: "Oct 2, 2026",
    },
    {
      name: "Tech Company",
      email: "company@email.com",
      role: "Employer",
      date: "Oct 1, 2026",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@email.com",
      role: "Candidate",
      date: "Sep 30, 2026",
    },
  ];

  const recentJobs = [
    {
      title: "Frontend Developer",
      company: "Tech Company",
      applications: 18,
      status: "Active",
    },
    {
      title: "Backend Developer",
      company: "Digital Solutions",
      applications: 12,
      status: "Active",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Studio",
      applications: 9,
      status: "Closed",
    },
  ];

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-container">
        <div className="admin-dashboard-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage users, jobs and applications from one place.</p>
          </div>
        </div>

        {/* Statistics */}

        <div className="admin-stats">
          {stats.map((stat) => (
            <div className="admin-stat-card" key={stat.title}>
              <p>{stat.title}</p>
              <h2>{stat.value}</h2>
            </div>
          ))}
        </div>

        {/* Recent Users */}

        <div className="admin-dashboard-card">
          <div className="admin-card-header">
            <div>
              <h2>Recent Users</h2>
              <p>Recently registered users</p>
            </div>

            <a href="/admin/users">View All</a>
          </div>

          <div className="admin-user-list">
            {recentUsers.map((user) => (
              <div className="admin-user-item" key={user.email}>
                <div>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>

                <span className="admin-role">{user.role}</span>

                <p className="admin-date">{user.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Jobs */}

        <div className="admin-dashboard-card">
          <div className="admin-card-header">
            <div>
              <h2>Recent Jobs</h2>
              <p>Recently posted jobs</p>
            </div>

            <a href="/admin/jobs">View All</a>
          </div>

          <div className="admin-job-list">
            {recentJobs.map((job) => (
              <div className="admin-job-item" key={job.title}>
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                </div>

                <span>{job.applications} Applications</span>

                <span
                  className={
                    job.status === "Active"
                      ? "admin-status-active"
                      : "admin-status-closed"
                  }
                >
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}

        <div className="admin-dashboard-card">
          <div className="admin-card-header">
            <div>
              <h2>Quick Actions</h2>
              <p>Common administrator actions</p>
            </div>
          </div>

          <div className="admin-quick-actions">
            <a href="/admin/users">Manage Users</a>

            <a href="/admin/jobs">Manage Jobs</a>

            <a href="/admin/applications">Manage Applications</a>

            <a href="/admin/reports">View Reports</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
