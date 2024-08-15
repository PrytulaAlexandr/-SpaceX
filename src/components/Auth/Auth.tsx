import { getAuth, signInWithPopup } from "firebase/auth";
import React, { ReactNode, useEffect, useState } from "react";
import { app, googleAuthProvider } from "../../firebase";
import Loader from "../Loader/Loader";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser) {
        setUser(maybeUser);
      } else {
        signInWithPopup(auth, googleAuthProvider)
          .then((credentials) => setUser(credentials.user))
          .catch((e) => console.error("Authentication error:", e));
      }
    });

    return () => unsub();
  }, [auth]);

  return <>{user ? children : <Loader/>}</>;
};

export default AuthProvider;
