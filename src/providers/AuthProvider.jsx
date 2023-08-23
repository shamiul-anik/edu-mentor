// import { User } from 'firebase/auth';
import AuthContext from "@/contexts/AuthContext";
import auth, { googleProvider } from "@/firebase/firebase.auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";

 const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  console.log('provider', user)

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // const profileUpdate = async (updateUser: { displayName?: string, photoURL?: string }) => {
  //   setLoading(true);
  
  //   const currentUser = auth.currentUser;
  
  // //   if (currentUser) {
  // //     await updateProfile(currentUser, updateUser);
  // //     setUser((preUser: user ) => ({ ...preUser, ...updateUser }));
  // //   }
  
  // //   setLoading(false); 
  // // };

  const profileUpdate = async (updateUser = {}) => {
    setLoading(true);
    await updateProfile(auth.currentUser, updateUser);
    setUser((preUser) => ({ ...preUser, ...updateUser }));
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    loading,
    createUser,
    signIn,
    profileUpdate,
    googleLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;