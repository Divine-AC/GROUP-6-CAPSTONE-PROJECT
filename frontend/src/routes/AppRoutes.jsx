import { Routes, Route } from "react-router-dom";

import EmployerDashboard from "../pages/employer/Dashboard";
import PostJob from "../pages/employer/Postjob";
import MyJobs from "../pages/employer/Myjobs";
import EditJob from "../pages/employer/Editjob";
import JobApplications from "../pages/employer/JobApplications";
import EmployerProfile from "../pages/employer/Profile";

import AdminDashboard from "../pages/admin/Dashboard";
import AdminUsers from "../pages/admin/Users";
import AdminJobs from "../pages/admin/Jobs";
import AdminApplications from "../pages/admin/Applications";
import AdminReport from "../pages/admin/Reports";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/employer/dashboard" element={<EmployerDashboard />} />

      <Route path="/employer/post-job" element={<PostJob />} />

      <Route path="/employer/my-jobs" element={<MyJobs />} />

      <Route path="/employer/edit-job/:jobId" element={<EditJob />} />

      <Route
        path="/employer/applications/:jobId"
        element={<JobApplications />}
      />

      <Route path="/employer/profile" element={<EmployerProfile />} />

      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/jobs" element={<AdminJobs />} />
      <Route path="/admin/applications" element={<AdminApplications />} />
      <Route path="/admin/reports" element={<AdminReport />} />
    </Routes>
  );
}

export default AppRoutes;
