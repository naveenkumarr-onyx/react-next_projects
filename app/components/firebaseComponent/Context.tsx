"use client";
import { createContext, useState } from "react";

export const AuthContext: any = createContext(null);

const AuthState = ({ children }: any) => {
  const [theme]: any = useState("");
  return (
    <AuthContext.Provider value={{ theme }}>{children}</AuthContext.Provider>
  );
};

export default AuthState;
