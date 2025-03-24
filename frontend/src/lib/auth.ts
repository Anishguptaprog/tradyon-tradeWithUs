export function getUser() {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null;
}

interface UserData {
  id: string;
  name: string;
  email: string;
}

export function login(userData: UserData) {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(userData));
  }
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
}
