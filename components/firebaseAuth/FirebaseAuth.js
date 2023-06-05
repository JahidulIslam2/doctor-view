import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import firebaseApp from "../firebase.config";




const auth = getAuth(firebaseApp)
export const AuthProvider = createContext();
const provider = new GoogleAuthProvider()


const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)

            } else {
                setUser(null)
            }
            setLoading(false)
        })
        return Unsubscribe();
    }, [])


    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const createUserEmailAndPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutAccount = () => {
        return signOut(auth)
    }




    const info = {
        createUserEmailAndPass,
        signInWithEmail,
        logOutAccount,
        signInWithGoogle,
        user,
        loading,
    }


    return (
        <AuthProvider.Provider value={info}>
            {loading ? <div>loading...</div> : children}
        </AuthProvider.Provider>
    );
}

export default AuthContextProvider