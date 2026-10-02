import { useState } from "react";

// Dummy job for now: later this will be loaded from the backend using the job id
const existingJob = {
  id: 1,
  title: "Frontend Developer",
  location: "Lagos",
  salary: "$50,000",
  type: "Full-time",
  description: "Build and maintain the company's web interfaces.",
};

export default function EditJob() {
  const [job, setJob] = useState(existingJob);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy for now: the backend update call will go here later
    console.log("Job updated:", job);
    setMessage("Job updated successfully!");
  };

  const fieldStyle = {
    display: "block",
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "16px" }}>
      <h1>Edit Job</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Job title"
          value={job.title}
          onChange={handleChange}
          style={fieldStyle}
          required
        />
        <input
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          style={fieldStyle}
          required
        />
        <input
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
          style={fieldStyle}
        />

        <select
          name="type"
          value={job.type}
          onChange={handleChange}
          style={fieldStyle}
        >
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>

        <textarea
          name="description"
          placeholder="Job description"
          rows={5}
          value={job.description}
          onChange={handleChange}
          style={fieldStyle}
          required
        />

        <button type="submit" style={{ padding: "10px 20px" }}>
          Save Changes
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
