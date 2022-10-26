import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const UserAuth = ({children}) => {
    const [user, setUser] = useState(null)

    // create a user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl})
    }
     
    // sign in this user
    const userSignin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // set current user
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unSubscribe()
    }, [])

    // current user log out
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        userSignin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserAuth;