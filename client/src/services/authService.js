import axios from "axios";

export const login = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    return response.data; // contains { token }
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};