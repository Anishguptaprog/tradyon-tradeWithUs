/* eslint-disable @typescript-eslint/no-explicit-any */
export function useAuth() {
    const user = JSON.parse(localStorage.getItem("user") || "null");
  
    function login(userData: any) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  
    function logout() {
      localStorage.removeItem("user");
    }
  
    return { user, login, logout };
  }