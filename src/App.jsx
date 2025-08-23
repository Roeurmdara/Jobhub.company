// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import PublicLayout from "./layouts/PublicLayout";
import PrivateRoute from "./layouts/ProtectedRoute";
import SidebarOnlyLayout from "./layouts/SidebarOnlyLayout";
import DashboardLayout from "./layouts/DashboardLayout";
// Import Pages
import Loading from "./pages/Loading";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Setdetail from "./pages/Setdetail";
import Messager from "./pages/Messager";
import BrowseCompanies from "./pages/BrowseCompanies";
import CompanyDashboard from "./pages/CompanyDashboard";
import CompanyProfile from "./pages/CompanyProfile";
import AllApplications from "./pages/AllApplications";
import ApplicationDetail from "./pages/ApplicationDetail";
import JobListing from "./pages/JobListing";
import JobListingDetail from "./pages/JobListingDetail";
import Schedule from "./pages/Schedule";
import CompanySetting from "./pages/CompanySetting";
import Help from "./pages/Help";

function AppContent() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-700">
          Initializing application...
        </div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Loading />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        {/* SidebarOnlyLayout */}
        <Route element={<SidebarOnlyLayout />}>
          <Route path="/browse-companies" element={<BrowseCompanies />} />
          <Route path="/set-detail" element={<Setdetail />} />
        </Route>

        {/* DashboardLayout */}
        <Route element={<DashboardLayout />}>
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/messager" element={<Messager />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/all-applications" element={<AllApplications />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/company-setting" element={<CompanySetting />} />
          <Route path="/help" element={<Help />} />

          {/* Dynamic routes */}
          <Route path="/application/:applicantId" element={<ApplicationDetail />} />
          <Route path="/job-listing" element={<JobListing />} />
          <Route path="/job/:jobId" element={<JobListingDetail />} />
        </Route>
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
