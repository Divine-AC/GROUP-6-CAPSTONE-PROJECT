import { Routes, Route } from "react-router-dom";

import EmployerDashboard from "../pages/employer/Dashboard";
import PostJob from "../pages/employer/Postjob";
import MyJobs from "../pages/employer/Myjobs";
import EditJob from "../pages/employer/Editjob";
import JobApplications from "../pages/employer/JobApplications";
import EmployerProfile from "../pages/employer/Profile";

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
    </Routes>
  );
}

export default AppRoutes;
