import {createContext} from "react"
import {signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect,useState,useContext } from "react";
import {auth} from "../services/config"
const userAuthContext=createContext();
export function UserAuthContextProvider({children}){
    const [user,setUser]=useState("")
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut(){
        return signOut(auth)
    }
    function signUp(email,password){
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    
    return<userAuthContext.Provider value={{user,login,logOut,signUp}}>{children}</userAuthContext.Provider>
}



export function useUserAuth(){
    return useContext(userAuthContext)
}