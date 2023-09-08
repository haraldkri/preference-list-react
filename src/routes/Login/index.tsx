import React, {FC, useContext} from 'react';
import {Button} from "antd";
import {UserContext} from "../../context/UserContext";

const LoginRoute: FC = () => {
    const {login, loading} = useContext(UserContext);

    return <div>
        <p>Login Route</p>
        <Button type={"primary"} onClick={login} disabled={loading}>Sign in with Google</Button>
    </div>
}

export default LoginRoute