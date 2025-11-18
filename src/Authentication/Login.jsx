import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md text-center px-6">
        
        <img
          src="/dicoding-logo.png"
          alt="Dicoding Logo"
          className="w-64 mx-auto mb-10"
        />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            className="w-full bg-[#0D375F] hover:bg-[#0B2F50] text-white font-medium py-3 rounded-md"
          >
            Masuk
          </button>
        </form>

        <div className="flex items-center my-8 gap-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">atau</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button className="w-full border border-gray-300 rounded-md bg-gray-50 py-3 flex items-center justify-center gap-3 hover:bg-gray-100">
          <img src="/google-icon.png" alt="Google" className="w-5" />
          <span className="text-sm font-medium">Masuk dengan Google</span>
        </button>

        <p className="mt-6 text-sm text-gray-600">
          Belum punya akun?{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            daftar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
