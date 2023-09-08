import React, {FC, useState} from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {Button, message} from "antd";

const LoginRoute: FC = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authorizing, setAuthorizing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthorizing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid);
                navigate('/', {replace: true})
            })
            .catch(error => {
                message.error("Login failed")
                console.log(error)
            })
            .finally(() => setAuthorizing(false))
    }

    return <div>
        <p>Login Route</p>
        <Button type={"primary"} onClick={signInWithGoogle} disabled={authorizing}>Sign in with Google</Button>
    </div>
}

export default LoginRoute