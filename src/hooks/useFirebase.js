import {  signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.initialize";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();

    const handleGoogleLogIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
        })
    }

    return{
        user,
        handleGoogleLogIn
    }
}

export default useFirebase;