import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register as authRegister } from "../../services/auth";
import { useAuth } from "../../contexts/AuthContext";


const Register = () => {
    const [form, setForm] = useState({ email: "", password: "", name: "", display_name: "", phone: "", });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { register } = useAuth();

    // Auto-hide error after 5 seconds
    useEffect(() => {
        let errorTimeout;

        if (error) {
            errorTimeout = setTimeout(() => {
                setError("");
            }, 5000); // 5 seconds
        }

        // Cleanup timeout
        return () => {
            if (errorTimeout) clearTimeout(errorTimeout);
        };
    }, [error]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password, name, display_name, phone } = form;
        const user_role = 1;

        // Validasi field wajib
        if (!email || !password || !name) {
            setError("Email, password, and name are required");
            return;
        }

        try {
            setLoading(true);
            setError("");
            // Urutan parameter yang benar: name, email, password, display_name, phone, user_role
            const userData = await authRegister(name, email, password, display_name, phone, user_role);
            register(userData);

            // Redirect to login with success message
            navigate("/login", {
                state: {
                    successMessage: "Registration successful! Please login with your credentials."
                }
            });
        } catch (err) {
            let errorMessage = "Registration failed. Please try again later.";
            if (err.response?.data?.error?.message) {
                errorMessage = err.response.data.error.message;
            }
            setError(errorMessage);
        }
        finally {
            setLoading(false);
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <div className="w-full max-w-[600px] bg-white p-8 rounded-2xl shadow-lg min-h-[700px] flex flex-col justify-between">
                <img
                    src="/dicoding-logos.png"
                    alt="Dicoding Logo"
                    className="w-40 mx-auto mb-6"
                />

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                        type="text"
                        name="name"
                        placeholder="Nama Lengkap"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        disabled={loading}
                    />

                    <input
                        type="text"
                        name="display_name"
                        placeholder="Nama Panggilan"
                        value={form.display_name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        disabled={loading}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Nomor Telepon"
                        value={form.phone}
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
                        {loading ? "Registering..." : "Daftar"}
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
                    Sudah punya akun?{" "}
                    <Link to="/" className="text-blue-600 font-semibold hover:underline">
                        masuk
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;