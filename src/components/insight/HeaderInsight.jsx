// src/components/insight/HeaderInsight.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function HeaderInsight() {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav
        className="max-w-6xl mx-auto px-4 lg:px-6 py-4 flex items-center gap-6"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <img src="/dicoding-logos.png" alt="Dicoding Logo" className="w-32" />

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 ml-6 text-sm font-medium text-gray-700">
          <li><a href="/dashboard" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">Academy</a></li>
          <li><a href="#" className="hover:text-blue-600">Challenge</a></li>
          <li><a href="#" className="hover:text-blue-600">Event</a></li>
          <li><a href="#" className="hover:text-blue-600">Job</a></li>
          <li><a href="#" className="hover:text-blue-600">Insight</a></li>
        </ul>

        {/* User / Notification */}
        <div className="flex items-center gap-4 ml-auto">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute w-10 h-10 bg-blue-200 rounded-full z-0"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full z-10"></div>
          </div>

          <button className="text-white hover:text-white" aria-label="Notification Button">
            <FontAwesomeIcon icon={faBell} className="w-6 h-6 text-black" />
          </button>
        </div>
      </nav>
    </header>
  );
}
