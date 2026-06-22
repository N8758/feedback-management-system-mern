import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import AdminLogin from "../pages/AdminLogin";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default AppRoutes;