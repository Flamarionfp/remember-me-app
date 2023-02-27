import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useCallback, useState } from "react";

import firebase from "@/src/config/firebase";

export const useAuth = () => {
  const auth = getAuth(firebase);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  const login = useCallback(async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  }, []);

  const logout = useCallback(() => {
    return signOut(auth);
  }, []);

  return { login, logout, isAuthenticated };
};
