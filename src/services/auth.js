// src/services/auth.js
import api from "./api";

export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    const { data } = response.data;
    const { accessToken, refreshToken, user } = data;

    localStorage.setItem("token", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return user;
  } catch (error) {
    throw error;
  }
};


export const register = async (name, email, password, display_name, phone, user_role) => {
  try {
    // Siapkan data registrasi sesuai dengan requirement API
    const registrationData = {
      name,
      email,
      password,
      display_name: display_name || name,
      phone: phone || "",
      user_role: user_role || 1 // Default ke role 1 jika tidak disediakan
    };

    console.log("Sending registration data:", registrationData); // Debug log

    const response = await api.post("/auth/register", registrationData);
    console.log("Registration response:", response.data); // Debug log

    const { data } = response.data;
    const { accessToken, refreshToken, user } = data;

    localStorage.setItem("token", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return user;
  } catch (error) {
    // Tampilkan detail error untuk debugging
    console.error("Register error details:", {
      message: error.response?.data || error.message,
      status: error.response?.status,
      data: error.response?.data
    });
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};