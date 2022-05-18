import React, { createContext, ProviderProps, ReactNode, useState } from "react";
import { AuthProvider } from "./auth";

interface AuthContextType {
  user: string;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (user: string, callback: VoidFunction) => void;
}
let AuthContext = createContext<AuthContextType>(null!);

export default function AuthProviderFun({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const signIn = (newUser: string, callback: VoidFunction) => {
    return AuthProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  };

  const signOut = (callback: VoidFunction) => {
    return AuthProvider.signOut(() => {
      setUser(null);
      callback();
    });
  };

  const value : IntrinsicAttributes & ProviderProps<AuthContextType> = { user, signIn, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
