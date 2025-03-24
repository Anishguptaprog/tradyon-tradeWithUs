export async function fetchData<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!API_BASE_URL) {
    throw new Error("API base URL is not defined in environment variables.");
  }

  // Ensure the endpoint is correctly prefixed
  const url = endpoint.startsWith("http") ? endpoint : `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json() as Promise<T>;
}
