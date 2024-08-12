"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebaseConfig";

export const AuthContext: any = createContext(null);

const AuthState = ({ children }: any) => {
  const [registerFormData, setRegisterFormData]: any = useState({
    name: "",
    email: "",
    password: "",
  });

  const createUserDataInFirebase = () => {
    const { email, password } = registerFormData;
    return createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <AuthContext.Provider
      value={{
        registerFormData,
        setRegisterFormData,
        createUserDataInFirebase,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
