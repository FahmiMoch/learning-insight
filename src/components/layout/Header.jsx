import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();        // hapus token + reset user
    navigate("/");   // pindah ke halaman Login.jsx
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-screen-xl mx-auto px-4 lg:px-6 py-4 flex items-center gap-6">

        {/* Logo */}
        <img src="/dicoding-logos.png" alt="Dicoding Logo" className="w-32" />

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 ml-6 text-sm font-medium text-gray-700">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">Academy</a></li>
          <li><a href="#" className="hover:text-blue-600">Challenge</a></li>
          <li><a href="#" className="hover:text-blue-600">Event</a></li>
          <li><a href="#" className="hover:text-blue-600">Job</a></li>
          <li><a href="/insight" className="hover:text-blue-600">Insight</a></li>
        </ul>

        {/* Avatar + Dropdown + Bell */}
        <div className="flex items-center gap-4 ml-auto relative">

          {/* Avatar */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute w-10 h-10 bg-blue-200 rounded-full z-0"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full z-10"></div>
          </div>

          {/* Chevron Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`w-4 h-4 transition-transform ${
                  openDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {openDropdown && (
              <ul className="absolute right-0 mt-2 bg-white shadow-md rounded-lg w-40 py-2 text-sm font-medium text-gray-700 z-30">
                <li>
                  <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                    Profile Saya
                  </a>
                </li>
                <li>
                  <a href="/daftar" className="block px-4 py-2 hover:bg-gray-100">
                    Daftar Pesanan
                  </a>
                </li>
                <li>
                  <a href="/pengaturan" className="block px-4 py-2 hover:bg-gray-100">
                    Pengaturan
                  </a>
                </li>

                {/* 🟥 Logout */}
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    Keluar
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Bell */}
          <button className="hover:text-gray-700" aria-label="Notification Button">
            <FontAwesomeIcon icon={faBell} className="w-6 h-6 text-black" />
          </button>

        </div>
      </nav>
    </header>
  );
}
