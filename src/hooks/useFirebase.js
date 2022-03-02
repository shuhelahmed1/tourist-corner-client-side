import {  signInWithPopup, GoogleAuthProvider, getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
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

    const logout = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                console.log('inside state chage', user)
                setUser(user)
            }
        })
    },[])

    return{
        user,
        logout,
        handleGoogleLogIn
    }
}

export default useFirebase;