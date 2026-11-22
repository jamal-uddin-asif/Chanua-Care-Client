import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "@/Firebase/firebase.config";


const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider()


  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider)
  }

  const updateUserProfile = (profileInfo) =>{
    return updateProfile(auth.currentUser, profileInfo)
  }

  const resetPassword = (email) =>{
    return sendPasswordResetEmail(auth, email)
  }

  const LogOutUser = () =>{
    setLoading(true)
    return signOut(auth)
  }

  const authInfo = {
    loading,
    createUser,
    signInUser,
    updateUserProfile,
    LogOutUser,
    googleSignIn,
    resetPassword,

  }

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;