function AdminApplications() {
  const applications = [
    {
      candidate: "John Doe",
      email: "john@email.com",
      job: "Frontend Developer",
      company: "Tech Company",
      date: "Oct 2, 2026",
      status: "Pending",
    },
    {
      candidate: "Sarah Johnson",
      email: "sarah@email.com",
      job: "Backend Developer",
      company: "Digital Solutions",
      date: "Oct 1, 2026",
      status: "Reviewed",
    },
    {
      candidate: "Michael Smith",
      email: "michael@email.com",
      job: "UI/UX Designer",
      company: "Creative Studio",
      date: "Sep 30, 2026",
      status: "Shortlisted",
    },
    {
      candidate: "David Williams",
      email: "david@email.com",
      job: "Cybersecurity Analyst",
      company: "SecureTech",
      date: "Sep 28, 2026",
      status: "Pending",
    },
    {
      candidate: "Emily Brown",
      email: "emily@email.com",
      job: "Python Developer",
      company: "Digital Solutions",
      date: "Sep 25, 2026",
      status: "Rejected",
    },
  ];

  return (
    <div className="admin-applications">
      <div className="admin-applications-container">
        <div className="admin-applications-header">
          <div>
            <h1>Manage Applications</h1>
            <p>View and manage job applications across the platform.</p>
          </div>
        </div>

        <div className="admin-applications-card">
          <div className="admin-applications-top">
            <div>
              <h2>All Applications</h2>
              <p>{applications.length} applications currently displayed</p>
            </div>

            <input
              type="text"
              placeholder="Search applications..."
              className="admin-application-search"
            />
          </div>

          <div className="admin-applications-list">
            <div className="admin-applications-table-header">
              <span>Candidate</span>
              <span>Job</span>
              <span>Company</span>
              <span>Date</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            {applications.map((application) => (
              <div
                className="admin-application-row"
                key={`${application.email}-${application.job}`}
              >
                <div className="admin-application-candidate">
                  <h3>{application.candidate}</h3>
                  <p>{application.email}</p>
                </div>

                <span className="admin-application-job">{application.job}</span>

                <span className="admin-application-company">
                  {application.company}
                </span>

                <span className="admin-application-date">
                  {application.date}
                </span>

                <span
                  className={
                    application.status === "Pending"
                      ? "admin-application-status-pending"
                      : application.status === "Reviewed"
                        ? "admin-application-status-reviewed"
                        : application.status === "Shortlisted"
                          ? "admin-application-status-shortlisted"
                          : "admin-application-status-rejected"
                  }
                >
                  {application.status}
                </span>

                <button
                  className="admin-application-action"
                  onClick={() =>
                    alert(`Viewing application from ${application.candidate}`)
                  }
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminApplications;
