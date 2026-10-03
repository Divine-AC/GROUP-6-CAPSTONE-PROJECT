import { useParams } from "react-router-dom";

function JobApplications() {
  const { jobId } = useParams();

  const applications = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@email.com",
      location: "Lagos, Nigeria",
      date: "Oct 2, 2026",
      status: "Pending",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@email.com",
      location: "Abuja, Nigeria",
      date: "Oct 1, 2026",
      status: "Reviewed",
    },
    {
      id: 3,
      name: "Michael Smith",
      email: "michael@email.com",
      location: "Ibadan, Nigeria",
      date: "Sep 30, 2026",
      status: "Shortlisted",
    },
  ];

  return (
    <div className="employer-page">
      <div className="employer-page-container">
        <div className="employer-page-header">
          <div>
            <h1>Job Applications</h1>
            <p>Review applications received for this job.</p>
          </div>

          <a href="/employer/my-jobs" className="employer-secondary-button">
            ← Back to My Jobs
          </a>
        </div>

        <div className="employer-application-summary">
          <div>
            <p>Total Applications</p>
            <h2>{applications.length}</h2>
          </div>

          <div>
            <p>Pending Review</p>
            <h2>
              {
                applications.filter(
                  (application) => application.status === "Pending",
                ).length
              }
            </h2>
          </div>

          <div>
            <p>Shortlisted</p>
            <h2>
              {
                applications.filter(
                  (application) => application.status === "Shortlisted",
                ).length
              }
            </h2>
          </div>
        </div>

        <div className="employer-dashboard-card">
          <div className="employer-card-header">
            <div>
              <h2>Applications</h2>
              <p>Applicants for Job ID: {jobId}</p>
            </div>
          </div>

          <div className="employer-applications-table">
            {applications.map((application) => (
              <div className="employer-application-row" key={application.id}>
                <div className="employer-applicant-info">
                  <div className="employer-applicant-avatar">
                    {application.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{application.name}</h3>
                    <p>{application.email}</p>
                  </div>
                </div>

                <div className="employer-application-location">
                  <span>Location</span>
                  <p>{application.location}</p>
                </div>

                <div className="employer-application-date">
                  <span>Applied</span>
                  <p>{application.date}</p>
                </div>

                <div>
                  <span
                    className={`employer-application-status employer-status-${application.status.toLowerCase()}`}
                  >
                    {application.status}
                  </span>
                </div>

                <div className="employer-application-actions">
                  <button
                    type="button"
                    onClick={() =>
                      alert(`Viewing ${application.name}'s application`)
                    }
                  >
                    View
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      alert(`${application.name} has been shortlisted`)
                    }
                  >
                    Shortlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApplications;
