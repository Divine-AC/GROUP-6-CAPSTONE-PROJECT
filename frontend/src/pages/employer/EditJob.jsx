import { useState } from "react";
import { useParams } from "react-router-dom";

function EditJob() {
  const { jobId } = useParams();

  const [formData, setFormData] = useState({
    title: "Frontend Developer",
    company: "Tech Company",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦200,000 - ₦300,000",
    description:
      "We are looking for a skilled Frontend Developer to join our team and build modern web applications.",
    requirements: "Experience with React, JavaScript, HTML, CSS and Git.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated job:", {
      id: jobId,
      ...formData,
    });

    alert("Job updated successfully!");
  };

  return (
    <div className="employer-page">
      <div className="employer-page-container">
        <div className="employer-page-header">
          <div>
            <h1>Edit Job</h1>
            <p>Update the information for this job posting.</p>
          </div>
        </div>

        <div className="employer-form-card">
          <form onSubmit={handleSubmit}>
            <div className="employer-form-grid">
              <div className="employer-form-group">
                <label htmlFor="title">Job Title</label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="employer-form-group">
                <label htmlFor="company">Company Name</label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="employer-form-group">
                <label htmlFor="location">Location</label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="employer-form-group">
                <label htmlFor="type">Employment Type</label>

                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="employer-form-group">
                <label htmlFor="salary">Salary</label>

                <input
                  id="salary"
                  name="salary"
                  type="text"
                  value={formData.salary}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="employer-form-group">
              <label htmlFor="description">Job Description</label>

              <textarea
                id="description"
                name="description"
                rows="6"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="employer-form-group">
              <label htmlFor="requirements">Requirements</label>

              <textarea
                id="requirements"
                name="requirements"
                rows="6"
                value={formData.requirements}
                onChange={handleChange}
                required
              />
            </div>

            <div className="employer-form-actions">
              <a href="/employer/my-jobs" className="employer-secondary-button">
                Cancel
              </a>

              <button type="submit" className="employer-primary-button">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditJob;
