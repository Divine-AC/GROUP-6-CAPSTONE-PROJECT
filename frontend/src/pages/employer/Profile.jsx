import { useState } from "react";

function Profile() {
  const [formData, setFormData] = useState({
    companyName: "Tech Company",
    email: "company@email.com",
    phone: "+234 800 000 0000",
    website: "https://example.com",
    location: "Lagos, Nigeria",
    description:
      "We are a technology company focused on building innovative digital solutions.",
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

    console.log("Updated employer profile:", formData);

    alert("Profile updated successfully!");
  };

  return (
    <div className="employer-page">
      <div className="employer-page-container">
        <div className="employer-page-header">
          <div>
            <h1>Employer Profile</h1>
            <p>Manage your company information.</p>
          </div>
        </div>

        <div className="employer-form-card">
          <form onSubmit={handleSubmit}>
            <div className="employer-form-grid">
              <div className="employer-form-group">
                <label htmlFor="companyName">Company Name</label>

                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="employer-form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="employer-form-group">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="employer-form-group">
                <label htmlFor="website">Company Website</label>

                <input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="employer-form-group">
                <label htmlFor="location">Company Location</label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="employer-form-group">
              <label htmlFor="description">Company Description</label>

              <textarea
                id="description"
                name="description"
                rows="7"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="employer-form-actions">
              <button type="submit" className="employer-primary-button">
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
