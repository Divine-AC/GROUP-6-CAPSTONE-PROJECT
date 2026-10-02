import { useState } from "react";

const initialApplications = [
  {
    id: 1,
    name: "Chinedu Okafor",
    job: "Frontend Developer",
    date: "2026-09-28",
    status: "Pending",
  },
  {
    id: 2,
    name: "Amina Bello",
    job: "Frontend Developer",
    date: "2026-09-29",
    status: "Shortlisted",
  },
  {
    id: 3,
    name: "Tunde Adeyemi",
    job: "Backend Developer",
    date: "2026-09-30",
    status: "Pending",
  },
  {
    id: 4,
    name: "Grace Eze",
    job: "UI/UX Designer",
    date: "2026-10-01",
    status: "Rejected",
  },
];

export default function JobApplications() {
  const [applications, setApplications] = useState(initialApplications);
  const [filter, setFilter] = useState("All");

  const updateStatus = (id, status) => {
    // Dummy for now: the backend update call will go here later
    setApplications(
      applications.map((a) => (a.id === id ? { ...a, status } : a)),
    );
  };

  const visible =
    filter === "All"
      ? applications
      : applications.filter((a) => a.status === filter);

  const cell = {
    padding: "8px",
    borderBottom: "1px solid #ccc",
    textAlign: "left",
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "16px" }}>
      <h1>Job Applications</h1>

      <label>
        Filter:{" "}
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Pending</option>
          <option>Shortlisted</option>
          <option>Rejected</option>
        </select>
      </label>

      {visible.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "12px",
          }}
        >
          <thead>
            <tr>
              <th style={cell}>Candidate</th>
              <th style={cell}>Job</th>
              <th style={cell}>Applied</th>
              <th style={cell}>Status</th>
              <th style={cell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((app) => (
              <tr key={app.id}>
                <td style={cell}>{app.name}</td>
                <td style={cell}>{app.job}</td>
                <td style={cell}>{app.date}</td>
                <td style={cell}>{app.status}</td>
                <td style={cell}>
                  <button onClick={() => updateStatus(app.id, "Shortlisted")}>
                    Shortlist
                  </button>{" "}
                  <button onClick={() => updateStatus(app.id, "Rejected")}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
