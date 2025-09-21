    import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
    import { createContext, useEffect, useState } from "react";
    import auth from "../firebase/firebase.config";

    export const AuthContext = createContext(null);
    const googleProvider = new GoogleAuthProvider();

    const AuthProvider = ({ children }) => {
        const [user, setUser] = useState();
        const [loading, setLoading] = useState();

        const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
        }

        const signInUser = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
        }

        const googleSignInUser = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
        }

        const logOut = () => {
            setLoading(true);
            return signOut(auth);
        }

        const updateUserProfile = (name, photoUrl) => {
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photoUrl
            })
        }

        useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                console.log('current User from authProvider_', currentUser.displayName);
                setLoading(false);
            });
            return () => {
                unSubscribe();
            }
        }, [])

        const authInfo = { user, loading, createUser, signInUser, googleSignInUser, logOut, updateUserProfile };
        return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        );
    };

    export default AuthProvider;