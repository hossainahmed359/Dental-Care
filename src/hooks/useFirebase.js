import initializeAuthentication from "../Firebase/firebaseInitAuth";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


// Initializing Firebase
initializeAuthentication();

// Use Firebase
const useFirebase = () => {

    // states
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [user, setUser] = useState({});

    // auth
    const auth = getAuth();

    // providers
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // Google Sign In
    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Facebook Sign In
    const facebookSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    // Email Password Registration
    const createAccountWithEmail = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Email Password Login
    const emailPasswordSignIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update User Name
    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    // User Login || LogOut Observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                const uid = user.uid;
                // ...
            }
            else {
                // User is signed out
                // ...
            }
            setIsLoading(false)
        });
    }, [])

    // Sign Out 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    // Return
    return { user, error, isLoading, setIsLoading, createAccountWithEmail, updateUserName, emailPasswordSignIn, googleSignIn, facebookSignIn, logOut }
}

export default useFirebase;