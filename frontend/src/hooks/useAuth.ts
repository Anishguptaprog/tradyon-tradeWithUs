"use client"
import { useState, useEffect } from "react";
import { getUser, login, logout } from "../lib/auth";

export function useAuth() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  interface UserData {
    id: string;
    name: string;
    email: string;
  }

  const handleLogin = (userData: UserData) => {
    login(userData);
    setUser(userData);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return { user, login: handleLogin, logout: handleLogout };
}
