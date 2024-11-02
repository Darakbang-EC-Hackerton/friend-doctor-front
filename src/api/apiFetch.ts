export const BASE_URL = "http://10.50.97.109:8081/api/v1";
export default async function apiFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  const config = {
    ...options,
    headers,
  };
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    }
    return await response.json();
  } catch (error) {
    console.error("API Fetch error:", error);
    throw error;
  }
}
