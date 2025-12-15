import { createContext, useContext } from "react";

export interface registerData {
  username: string;
  cni: string;
  phone: string;
  email: string;
  password: string;
}

export type Member = Omit<registerData, "password"> & {
  _id: string;
};

interface AuthContextType {
  token: string | undefined;
  member: Member | undefined;
  register: (registerData: registerData) => Promise<void>;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
