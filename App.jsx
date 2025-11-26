import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./src/features/auth/Login";
import MainDashboard from "./src/pages/MainDashboard";
import InsightDashboard from "./src/pages/InsightDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Utama */}
        <Route path="/dashboard" element={<MainDashboard />} />

        {/* Halaman Insight */}
        <Route path="/insight" element={<InsightDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
