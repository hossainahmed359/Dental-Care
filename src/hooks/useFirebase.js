import initializeAuthentication from "../Firebase/firebaseInitAuth";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


// Initializing Firebase
initializeAuthentication();

// Use Firebase
const useFirebase = () => {

    // states
    const [error, setError] = useState('');
    const [user, setUser] = useState({});

    // auth
    const auth = getAuth();

    // providers
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // Google Sign In
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Facebook Sign In
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    // Email Password Registration
    const createAccountWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    // Email Password Login
    const emailPasswordSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                setError(error.message)
            });
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
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

    // Sign Out 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                setError(error.message);
            });
    }

    // Return
    return { user, error, createAccountWithEmail, updateUserName, emailPasswordSignIn, googleSignIn, facebookSignIn, logOut }
}

export default useFirebase;