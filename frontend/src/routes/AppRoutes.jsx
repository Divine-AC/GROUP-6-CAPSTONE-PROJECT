import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<h1>Job Recruitment Portal</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />

        {/* Candidate routes */}
        <Route path="/jobs" element={<h1>Jobs</h1>} />
        <Route path="/jobs/:id" element={<h1>Job Details</h1>} />

        {/* Employer routes */}
        <Route
          path="/employer/dashboard"
          element={<h1>Employer Dashboard</h1>}
        />

        {/* Admin routes */}
        <Route
          path="/admin/dashboard"
          element={<h1>Admin Dashboard</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;