import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const UserAuth = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // create a user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl})
    }
     
    // sign in this user
    const userSignin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // set current user
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    //log in with google
    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //log in with github
    const githubSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //reset password
    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    // current user log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        userSignin,
        logOut,
        googleSignin,
        githubSignin,
        resetPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserAuth;