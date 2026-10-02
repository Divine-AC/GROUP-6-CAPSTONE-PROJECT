import { useState } from "react";

const initialJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Lagos",
    type: "Full-time",
    applicants: 12,
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Remote",
    type: "Contract",
    applicants: 8,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Abuja",
    type: "Part-time",
    applicants: 5,
  },
];

export default function MyJobs() {
  const [jobs, setJobs] = useState(initialJobs);

  const handleDelete = (id) => {
    if (window.confirm("Delete this job?")) {
      setJobs(jobs.filter((job) => job.id !== id));
    }
  };

  const handleEdit = (id) => {
    // Dummy for now: this will navigate to the Edit Job page later
    console.log("Edit job:", id);
  };

  const cell = {
    padding: "8px",
    borderBottom: "1px solid #ccc",
    textAlign: "left",
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px" }}>
      <h1>My Jobs</h1>

      {jobs.length === 0 ? (
        <p>You haven't posted any jobs yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={cell}>Title</th>
              <th style={cell}>Location</th>
              <th style={cell}>Type</th>
              <th style={cell}>Applicants</th>
              <th style={cell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td style={cell}>{job.title}</td>
                <td style={cell}>{job.location}</td>
                <td style={cell}>{job.type}</td>
                <td style={cell}>{job.applicants}</td>
                <td style={cell}>
                  <button onClick={() => handleEdit(job.id)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(job.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
