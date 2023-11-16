import {  createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.initialize";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }

    const handleRegister = e =>{
        console.log('clicked')
        e.preventDefault();
       
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredential => {
            const user = userCredential.user ;
            setError('')
            e.target.reset();
        })
        .catch(error=>{
            setError(error.message)
        })
    }

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
        email,
        handleEmail,
        password,
        handlePassword,
        handleRegister,
        user,
        logout,
        handleGoogleLogIn,
        isLoading,
        error
    }
}

export default useFirebase;