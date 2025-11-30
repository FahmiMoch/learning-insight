import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./src/features/auth/Login";
import Register from "./src/features/auth/Register";

import MainDashboard from "./src/pages/MainDashboard";
import InsightDashboard from "./src/pages/InsightDashboard";

import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import { InsightProvider } from "./src/contexts/InsightContext";
import ProtectedRoute from "./src/components/layout/ProtectedRoute";
import PublicOnlyRoute from "./src/components/layout/PublicOnlyRoute";

// Wrapper untuk InsightProvider yang membutuhkan userId
const AppWrapper = () => {
  const { user } = useAuth();
  return (
    <InsightProvider userId={user?.id}>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicOnlyRoute>
              <Register />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/insight"
          element={
            <ProtectedRoute>
              <InsightDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </InsightProvider>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;