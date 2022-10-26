import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AllContext = createContext();

const auth = getAuth(app);

const ContextProvider = ({children}) => {
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem("isDark")));
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
      }
    
      const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
      }

      const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
      }
    
      const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
      }
    
      const logOut = () => {
        setLoading(true);
        return signOut(auth);
      }
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        })
        return () => {
          unsubscribe();
        }
      }, [])
    const allInfo = {dark, user, loading, setDark, providerLogin, createUser, signIn, logOut, updateUserProfile }
    return (
        <AllContext.Provider value={allInfo}>{children}</AllContext.Provider>
    );
};

export default ContextProvider;