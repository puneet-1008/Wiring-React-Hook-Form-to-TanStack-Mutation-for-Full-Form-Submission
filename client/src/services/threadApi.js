import axios from "axios";

// A single, shared Axios instance. Override the local default in client/.env.development.
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001/api",
});

// Read the list.
export async function getThreads() {
  const response = await apiClient.get("/threads");
  return response.data;
}

// Create a thread. Pure wrapper around the HTTP call — no React, no hooks.
export async function createThread(data) {
  const response = await apiClient.post("/threads", data);
  return response.data;
}
