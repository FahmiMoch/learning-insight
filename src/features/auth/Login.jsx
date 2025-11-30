import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { login as authLogin } from "../../services/auth";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // Check for success message from navigation state
  useEffect(() => {
    if (location.state?.successMessage) {
      setSuccessMessage(location.state.successMessage);
      // Clear the message after showing it
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [location]);

  // Auto-hide alerts after 5 seconds
  useEffect(() => {
    let errorTimeout;
    let successTimeout;

    if (error) {
      errorTimeout = setTimeout(() => {
        setError("");
      }, 5000); // 5 seconds
    }

    if (successMessage) {
      successTimeout = setTimeout(() => {
        setSuccessMessage("");
      }, 5000); // 5 seconds
    }

    // Cleanup timeouts
    return () => {
      if (errorTimeout) clearTimeout(errorTimeout);
      if (successTimeout) clearTimeout(successTimeout);
    };
  }, [error, successMessage]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
    if (successMessage) setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = form;

    // Basic validation
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccessMessage("");
      const userData = await authLogin(email, password);

      login(userData);

      // Set success message
      setSuccessMessage("Login successful! Welcome back.");

      navigate("/dashboard");
    } catch (err) {
      let errorMessage = "Login failed. Please check your credentials.";

      if (err.response?.data?.error?.message) {
        errorMessage = err.response.data.error.message;
      }

      setError(errorMessage);
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-[600px] bg-white p-8 rounded-2xl shadow-lg min-h-[700px] flex flex-col justify-between">
        <img
          src="/dicoding-logos.png"
          alt="Dicoding Logo"
          className="w-40 mx-auto mb-6"
        />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {successMessage && (
            <div className="text-green-500 text-sm py-2 px-3 bg-green-50 rounded-md">
              {successMessage}
            </div>
          )}

          {error && (
            <div className="text-red-500 text-sm py-2 px-3 bg-red-50 rounded-md">
              {error}
            </div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            disabled={loading}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            disabled={loading}
          />

          <button
            type="submit"
            className={`w-full bg-[#0D375F] hover:bg-[#0B2F50] text-white font-medium py-3 rounded-md transition-colors ${loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Masuk"}
          </button>
        </form>

        <div className="flex items-center my-6 gap-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">atau</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button className="w-full border border-gray-300 rounded-md bg-gray-50 py-3 flex items-center justify-center gap-3 hover:bg-gray-100">
          <img src="/google-logos.png" alt="Google" className="w-5" />
          <span className="text-sm font-medium">Masuk dengan Google</span>
        </button>

        <p className="mt-6 text-sm text-gray-600 text-center">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;