import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import type { registerData, Member } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | undefined>();
  const [member, setMember] = useState<Member | undefined>();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedMember = localStorage.getItem("member");

    if (storedToken) setToken(storedToken);
    if (storedMember) setMember(JSON.parse(storedMember) as Member);
    else logout();
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
      if (data.token && data.member) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("member", JSON.stringify(data.member));
        setToken(data.token);
        setMember(data.member);
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
    localStorage.removeItem("member");
    setToken(undefined);
    setMember(undefined);
  };

  return (
    <AuthContext.Provider value={{ token, member, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
