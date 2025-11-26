// src/services/auth.js
import api from "./api";

export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    const { token, user } = response.data;

    localStorage.setItem("token", token);

    return user;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};


export const register = async (name, email, password) => {
  try {
    const response = await api.post("/auth/register", { name, email, password });
    const { token, user } = response.data;

    localStorage.setItem("token", token);

    return user;
  } catch (error) {
    console.error("Register error:", error.response?.data || error.message);
    throw error;
  }
};

export const getMe = async () => {
  try {
    const response = await api.get("/auth/me");
    return response.data;
  } catch (error) {
    console.error("GetMe error:", error.response?.data || error.message);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
