import { createContext, useEffect, useState } from "react";

import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    const registerNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser)
            if (currentUser) {
                const loggedUser = { email: currentUser?.email };
                axios.post(`http://localhost:5001/get_jwt_access_token`, loggedUser)
                    .then(res => {
                        localStorage.setItem('access-token', res?.data?.token)
                        setLoading(false)
                    })
            } else {
                setLoading(false)
                localStorage.removeItem('access-token')
            }
        })
        return () => {
            unsubscribe()
        }
    }, [auth])


    const data = {
        user,
        loading,
        registerNewUser,
        updateUser,
        signIn,
        logOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

