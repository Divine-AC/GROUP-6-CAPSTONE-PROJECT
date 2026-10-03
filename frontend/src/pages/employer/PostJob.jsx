import { useState } from "react";

function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salary: "",
    description: "",
    requirements: "",
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

    console.log("Job submitted:", formData);

    alert("Job posted successfully!");
  };

  return (
    <div className="employer-page">
      <div className="employer-page-container">
        <div className="employer-page-header">
          <div>
            <h1>Post a Job</h1>
            <p>Create a new job opportunity for candidates.</p>
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
                  placeholder="e.g. Frontend Developer"
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
                  placeholder="Enter company name"
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
                  placeholder="e.g. Lagos, Nigeria"
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
                  placeholder="e.g. ₦200,000 - ₦300,000"
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
                placeholder="Describe the job role and responsibilities..."
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
                placeholder="List the skills, qualifications and experience required..."
                value={formData.requirements}
                onChange={handleChange}
                required
              />
            </div>

            <div className="employer-form-actions">
              <button type="button" className="employer-secondary-button">
                Cancel
              </button>

              <button type="submit" className="employer-primary-button">
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
