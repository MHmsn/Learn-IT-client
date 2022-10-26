import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AllContext = createContext();

const auth = getAuth(app);

const ContextProvider = ({children}) => {
    const [dark, setDark] = useState(true);
    const [user, setUser] = useState(null); 


    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
      }
    
      const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
      }
    
      const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
      }
    
      const logOut = () => {
        return signOut(auth);
      }
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        })
        return () => {
          unsubscribe();
        }
      }, [])
    const allInfo = {dark, user, setDark, providerLogin, createUser, signIn, logOut }
    return (
        <AllContext.Provider value={allInfo}>{children}</AllContext.Provider>
    );
};

export default ContextProvider;