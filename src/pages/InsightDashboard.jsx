import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import HeaderInsight from "../components/insight/HeaderInsight";
import Report from "../components/insight/Report";
import SummarySection from "../components/insight/SummarySection";
import ChartSection from "../components/insight/ChartSection";
import LearningStyleSection from "../components/insight/LearningStyleSection";
import RecommendationSection from "../components/insight/RecommendationSection";
import FooterInsight from "../components/insight/FooterInsight";

export default function InsightDashboard() {
  const [range, setRange] = useState(7);

  // Manual Data for Chart
  const baseData = {
    7: [12, 18, 14, 22, 17, 19, 8],
    14: [8, 10, 12, 15, 14, 13, 12, 18, 14, 22, 17, 19, 8, 10],
    30: Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * (25 - 8 + 1)) + 8
    ),
  };

  const data = baseData[range];

  return (
    <div className="min-h-screen w-full bg-[#f8f8f8] text-gray-900">
      {/* NAVBAR */}
      <nav className="w-full bg-white shadow py-4 fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between px-6 items-center relative">
          {/* Logo */}
          <img src="/dicoding-logos.png" className="w-28" />

          {/* Menu */}
          <div className="flex gap-6 text-sm">
            <a href="/dashboard" className="hover:text-blue-600">Home</a>
            <a className="hover:text-blue-600">Academy</a>
            <a className="hover:text-blue-600">Challenge</a>
            <a className="hover:text-blue-600">Event</a>
            <a className="hover:text-blue-600">Job</a>
            <a href="/insight" className="font-semibold text-blue-700">Insight</a>
          </div>

          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="relative w-6 h-6">
              <div className="absolute w-10 h-10 bg-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full relative z-10"></div>
            </div>

            {/* Bell icon */}
            <button className="text-gray-600 hover:text-gray-800">
              <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <div className="h-[80px]"></div>

      {/* HEADER */}
      <HeaderInsight />
      <div className="h-[20px]"></div>

      <main>
        <Report />
        <SummarySection />
        <ChartSection range={range} setRange={setRange} />
        <LearningStyleSection />
        <RecommendationSection />
      </main>

      <FooterInsight />
    </div>
  );
}
