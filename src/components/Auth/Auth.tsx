import { getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import React, { ReactNode, useState, useEffect, createContext, useContext } from "react";
import { app, googleAuthProvider } from "../../firebase";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  user: any;
  signIn: () => void;
  signOutUser: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const auth = getAuth(app);

  // Listen for auth state changes and set the user accordingly
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (maybeUser) => {
      setUser(maybeUser);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, [auth]);

  const signIn = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((credentials) => setUser(credentials.user))
      .catch((e) => console.error("Authentication error:", e));
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((e) => console.error("Sign-out error:", e));
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
