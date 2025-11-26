// src/services/insight.js
import api from "./api";

export const getAllInsights = async () => {
  try {
    const response = await api.get("/insights");
    return response.data;
  } catch (error) {
    console.error("getAllInsights error:", error.response?.data || error.message);
    throw error;
  }
};


export const getInsightByUser = async (userId) => {
  try {
    const response = await api.get(`/insights/${userId}`);
    return response.data;
  } catch (error) {
    console.error("getInsightByUser error:", error.response?.data || error.message);
    throw error;
  }
};


export const submitInsight = async (userId, payload) => {
  try {
    const response = await api.post(`/insights/${userId}`, payload);
    return response.data;
  } catch (error) {
    console.error("submitInsight error:", error.response?.data || error.message);
    throw error;
  }
};
