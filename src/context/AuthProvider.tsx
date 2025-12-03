import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import type { registerData } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    const stored = localStorage.getItem("token");
    if (stored) setToken(stored);
  }, []);

  const register = async (registerData: registerData) => {
    try {
      const res = await fetch(
        "https://club-server-25gd.onrender.com/members/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerData),
        }
      );

      if (!res.ok) throw new Error("Registration failed");
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  };

  const login = async (credentials: { username: string; password: string }) => {
    try {
      const res = await fetch(
        "https://club-server-25gd.onrender.com/members/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        }
      );

      const data = await res.json(); // parse the JSON

      if (!res.ok) {
        // Use the message from the server
        throw new Error(data.message || "Login failed");
      }

      // Success
      if (data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      } else {
        throw new Error("No token received");
      }
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(undefined);
  };

  return (
    <AuthContext.Provider value={{ token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
