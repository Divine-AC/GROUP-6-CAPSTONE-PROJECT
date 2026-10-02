import { useAuth } from "../../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <main className="profile-page">
      <div className="profile-container">

        {/* Profile Header */}

        <section className="profile-header">
          <div className="profile-avatar">
            {user?.firstName
              ?.charAt(0)
              ?.toUpperCase() || "C"}
          </div>

          <div>
            <span className="section-eyebrow">
              MY PROFILE
            </span>

            <h1>
              {user?.firstName} {user?.lastName}
            </h1>

            <p>
              {user?.desiredRole || "Job Candidate"}
            </p>
          </div>
        </section>

        <div className="profile-layout">

          {/* Personal Information */}

          <section className="profile-card">
            <div className="profile-card-header">
              <h2>Personal Information</h2>

              <p>
                Your candidate information.
              </p>
            </div>

            <div className="profile-info-grid">

              <div className="profile-info-item">
                <span>First name</span>
                <strong>
                  {user?.firstName || "Not provided"}
                </strong>
              </div>

              <div className="profile-info-item">
                <span>Last name</span>
                <strong>
                  {user?.lastName || "Not provided"}
                </strong>
              </div>

              <div className="profile-info-item profile-info-full">
                <span>Email address</span>
                <strong>
                  {user?.email || "Not provided"}
                </strong>
              </div>

              <div className="profile-info-item">
                <span>Location</span>
                <strong>
                  {user?.location || "Not provided"}
                </strong>
              </div>

              <div className="profile-info-item">
                <span>Experience level</span>
                <strong>
                  {user?.experienceLevel ||
                    "Not provided"}
                </strong>
              </div>

              <div className="profile-info-item profile-info-full">
                <span>Desired job role</span>
                <strong>
                  {user?.desiredRole || "Not provided"}
                </strong>
              </div>

            </div>
          </section>

          {/* Profile Summary */}

          <aside className="profile-side-card">

            <div className="profile-side-avatar">
              {user?.firstName
                ?.charAt(0)
                ?.toUpperCase() || "C"}
            </div>

            <h2>
              {user?.firstName} {user?.lastName}
            </h2>

            <p>
              {user?.desiredRole || "Job Candidate"}
            </p>

            <div className="profile-side-divider" />

            <div className="profile-side-item">
              <span>Location</span>

              <strong>
                {user?.location || "Not specified"}
              </strong>
            </div>

            <div className="profile-side-item">
              <span>Experience</span>

              <strong>
                {user?.experienceLevel ||
                  "Not specified"}
              </strong>
            </div>

            <div className="profile-side-item">
              <span>Email</span>

              <strong>
                {user?.email || "Not specified"}
              </strong>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}

export default Profile;