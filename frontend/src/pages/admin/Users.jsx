function AdminUsers() {
  const users = [
    {
      name: "John Doe",
      email: "john@email.com",
      role: "Candidate",
      status: "Active",
      date: "Oct 2, 2026",
    },
    {
      name: "Tech Company",
      email: "company@email.com",
      role: "Employer",
      status: "Active",
      date: "Oct 1, 2026",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@email.com",
      role: "Candidate",
      status: "Active",
      date: "Sep 30, 2026",
    },
    {
      name: "Digital Solutions",
      email: "digital@email.com",
      role: "Employer",
      status: "Active",
      date: "Sep 28, 2026",
    },
    {
      name: "Michael Smith",
      email: "michael@email.com",
      role: "Candidate",
      status: "Suspended",
      date: "Sep 25, 2026",
    },
  ];

  return (
    <div className="admin-users">
      <div className="admin-users-container">
        <div className="admin-users-header">
          <div>
            <h1>Manage Users</h1>
            <p>View and manage registered candidates and employers.</p>
          </div>
        </div>

        <div className="admin-users-card">
          <div className="admin-users-top">
            <div>
              <h2>All Users</h2>
              <p>{users.length} users currently displayed</p>
            </div>

            <input
              type="text"
              placeholder="Search users..."
              className="admin-user-search"
            />
          </div>

          <div className="admin-users-list">
            <div className="admin-users-table-header">
              <span>User</span>
              <span>Role</span>
              <span>Status</span>
              <span>Date Joined</span>
              <span>Action</span>
            </div>

            {users.map((user) => (
              <div className="admin-user-row" key={user.email}>
                <div className="admin-user-info">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>

                <span className="admin-user-role">{user.role}</span>

                <span
                  className={
                    user.status === "Active"
                      ? "admin-user-status-active"
                      : "admin-user-status-suspended"
                  }
                >
                  {user.status}
                </span>

                <span className="admin-user-date">{user.date}</span>

                <button
                  className="admin-user-action"
                  onClick={() => alert(`Managing ${user.name}`)}
                >
                  Manage
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
