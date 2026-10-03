function AdminReport() {
  const overview = [
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
      title: "Active Jobs",
      value: "64",
    },
  ];

  const applicationStats = [
    {
      label: "Pending",
      value: "32",
      percentage: "30%",
    },
    {
      label: "Reviewed",
      value: "41",
      percentage: "38%",
    },
    {
      label: "Shortlisted",
      value: "20",
      percentage: "19%",
    },
    {
      label: "Rejected",
      value: "14",
      percentage: "13%",
    },
  ];

  const jobStats = [
    {
      label: "Active Jobs",
      value: "64",
    },
    {
      label: "Closed Jobs",
      value: "22",
    },
  ];

  return (
    <div className="admin-report">
      <div className="admin-report-container">
        <div className="admin-report-header">
          <div>
            <h1>Reports</h1>
            <p>Overview of platform activity and statistics.</p>
          </div>
        </div>

        {/* Overview */}

        <div className="admin-report-overview">
          {overview.map((item) => (
            <div className="admin-report-stat" key={item.title}>
              <p>{item.title}</p>
              <h2>{item.value}</h2>
            </div>
          ))}
        </div>

        {/* Application Statistics */}

        <div className="admin-report-card">
          <div className="admin-report-card-header">
            <div>
              <h2>Application Statistics</h2>
              <p>Current application status breakdown.</p>
            </div>
          </div>

          <div className="admin-application-stats">
            {applicationStats.map((item) => (
              <div className="admin-application-stat" key={item.label}>
                <div className="admin-application-stat-top">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>

                <div className="admin-progress">
                  <div
                    className="admin-progress-bar"
                    style={{ width: item.percentage }}
                  ></div>
                </div>

                <small>{item.percentage} of applications</small>
              </div>
            ))}
          </div>
        </div>

        {/* Job Statistics */}

        <div className="admin-report-card">
          <div className="admin-report-card-header">
            <div>
              <h2>Job Statistics</h2>
              <p>Current job posting overview.</p>
            </div>
          </div>

          <div className="admin-job-stat-list">
            {jobStats.map((item) => (
              <div className="admin-job-stat-item" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Summary */}

        <div className="admin-report-card">
          <div className="admin-report-card-header">
            <div>
              <h2>Platform Summary</h2>
              <p>General information about the platform.</p>
            </div>
          </div>

          <div className="admin-report-summary">
            <p>
              The platform currently has <strong>248 users</strong> and{" "}
              <strong>86 job postings</strong>. There are{" "}
              <strong>534 applications</strong> across the available jobs, with{" "}
              <strong>64 active jobs</strong> currently accepting applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminReport;
