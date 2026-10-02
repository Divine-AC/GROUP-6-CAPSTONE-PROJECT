import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";

import Jobs from "../pages/candidate/Jobs";
import JobDetails from "../pages/candidate/JobDetails";
import ApplyJob from "../pages/candidate/ApplyJob";
import MyApplications from "../pages/candidate/MyApplications";
import ApplicationDetails from "../pages/candidate/ApplicationDetails";
import Dashboard from "../pages/candidate/Dashboard";
import Profile from "../pages/candidate/Profile";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Public pages */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/jobs/:jobId"
          element={<JobDetails />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Protected candidate pages */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/jobs/:jobId/apply"
          element={
            <ProtectedRoute>
              <ApplyJob />
            </ProtectedRoute>
          }
        />

        <Route
          path="/applications"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/applications/:applicationId"
          element={
            <ProtectedRoute>
              <ApplicationDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;