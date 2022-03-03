import {  signInWithPopup, GoogleAuthProvider, getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.initialize";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const handleGoogleLogIn = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
        })
        .finally(()=>setIsLoading(false))
    }

    const logout = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user=>{
            if(user){
                console.log('inside state chage', user)
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return ()=> unsubscribed;
    },[])

    return{
        user,
        logout,
        handleGoogleLogIn,
        isLoading
    }
}

export default useFirebase;