import React, {useEffect, useState} from "react";
import {UserContext} from "../context/UserContext"
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {message} from "antd";

type Props = {
    children: any
};

type SupportedLoginTypes = "google";

const UserProvider = ({children}: Props) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();

    // listen to changes on the firebase auth object and update user accordingly
    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)

            if (user) {
                setLoading(false);
                navigate("/", {replace: true})
            } else {
                console.log('unauthorized');
                navigate("/login", {replace: true})
            }
        });

        return () => AuthCheck();
    }, [auth, navigate]);

    const handleLogin = (loginType?: SupportedLoginTypes) => {
        let provider = new GoogleAuthProvider();
        // if(loginType === "somethingElse") provider = ...

        signInWithPopup(auth, provider)
            .then(response => {
                console.log(response.user.uid);
                navigate('/', {replace: true})
                message.success("Login successful")
            })
            .catch(error => {
                console.log(error)
                message.error("Login failed")
            })
    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            message.success("Logout successful")
        });
    }

    return <UserContext.Provider value={{user: currentUser, login: handleLogin, logout: handleLogout, loading}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider