import { useState } from "react";

// Dummy data for now: later this will come from the backend
const initialProfile = {
  companyName: "TechNova Ltd",
  industry: "Software",
  companySize: "11-50",
  foundedYear: "2018",
  location: "Lagos, Nigeria",
  website: "https://technova.com",
  linkedin: "https://linkedin.com/company/technova",
  email: "hr@technova.com",
  phone: "+234 800 000 0000",
  about: "We build software products for businesses across Africa.",
  hiringStats: { activeJobs: 3, totalApplicants: 25, hired: 4 },
};

const industries = [
  "Software",
  "Finance",
  "Healthcare",
  "Education",
  "Retail",
  "Manufacturing",
  "Other",
];
const sizes = ["1-10", "11-50", "51-200", "201-500", "500+"];

export default function Profile() {
  const [profile, setProfile] = useState(initialProfile);
  const [draft, setDraft] = useState(initialProfile);
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Dummy for now: the backend update call will go here later
    console.log("Employer profile saved:", draft);
    setProfile(draft);
    setEditing(false);
    setMessage("Company profile updated successfully!");
  };

  const handleCancel = () => {
    setDraft(profile);
    setEditing(false);
  };

  const box = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
  };
  const fieldStyle = {
    display: "block",
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
  };
  const label = { display: "block", marginBottom: "4px", fontWeight: "bold" };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "16px" }}>
      <h1>Company Profile</h1>

      {message && <p>{message}</p>}

      {/* Header card */}
      <div
        style={{ ...box, display: "flex", alignItems: "center", gap: "16px" }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          {profile.companyName.charAt(0)}
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0 }}>{profile.companyName}</h2>
          <p style={{ margin: "4px 0" }}>
            {profile.industry} · {profile.location}
          </p>
        </div>
        {!editing && (
          <button
            onClick={() => {
              setDraft(profile);
              setEditing(true);
              setMessage("");
            }}
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* Hiring stats */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
        {[
          { label: "Active Jobs", value: profile.hiringStats.activeJobs },
          {
            label: "Total Applicants",
            value: profile.hiringStats.totalApplicants,
          },
          { label: "Hired", value: profile.hiringStats.hired },
        ].map((s) => (
          <div
            key={s.label}
            style={{ ...box, flex: 1, textAlign: "center", marginBottom: 0 }}
          >
            <h2 style={{ margin: 0 }}>{s.value}</h2>
            <p style={{ margin: 0 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {!editing ? (
        <>
          <div style={box}>
            <h3>About</h3>
            <p>{profile.about}</p>
          </div>

          <div style={box}>
            <h3>Company Details</h3>
            <p>Company size: {profile.companySize} employees</p>
            <p>Founded: {profile.foundedYear}</p>
            <p>Website: {profile.website}</p>
            <p>LinkedIn: {profile.linkedin}</p>
          </div>

          <div style={box}>
            <h3>Contact (HR)</h3>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
          </div>
        </>
      ) : (
        <form onSubmit={handleSave}>
          <div style={box}>
            <h3>Company Information</h3>

            <label style={label}>Company name</label>
            <input
              name="companyName"
              value={draft.companyName}
              onChange={handleChange}
              style={fieldStyle}
              required
            />

            <label style={label}>Industry</label>
            <select
              name="industry"
              value={draft.industry}
              onChange={handleChange}
              style={fieldStyle}
            >
              {industries.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>

            <label style={label}>Company size (employees)</label>
            <select
              name="companySize"
              value={draft.companySize}
              onChange={handleChange}
              style={fieldStyle}
            >
              {sizes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <label style={label}>Year founded</label>
            <input
              name="foundedYear"
              value={draft.foundedYear}
              onChange={handleChange}
              style={fieldStyle}
            />

            <label style={label}>Location</label>
            <input
              name="location"
              value={draft.location}
              onChange={handleChange}
              style={fieldStyle}
              required
            />

            <label style={label}>About the company</label>
            <textarea
              name="about"
              rows={5}
              value={draft.about}
              onChange={handleChange}
              style={fieldStyle}
              required
            />
          </div>
          <div style={box}>
            <h3>Online Presence</h3>

            <label style={label}>Website</label>
            <input
              name="website"
              value={draft.website}
              onChange={handleChange}
              style={fieldStyle}
            />

            <label style={label}>LinkedIn</label>
            <input
              name="linkedin"
              value={draft.linkedin}
              onChange={handleChange}
              style={fieldStyle}
            />
          </div>
          <div style={box}>
            <h3>HR Contact</h3>

            <label style={label}>Email</label>
            <input
              name="email"
              type="email"
              value={draft.email}
              onChange={handleChange}
              style={fieldStyle}
              required
            />

            <label style={label}>Phone</label>
            <input
              name="phone"
              value={draft.phone}
              onChange={handleChange}
              style={fieldStyle}
            />
          </div>
          <button type="submit" style={{ padding: "10px 20px" }}>
            Save Changes
          </button>{" "}
          <button
            type="button"
            onClick={handleCancel}
            style={{ padding: "10px 20px" }}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
