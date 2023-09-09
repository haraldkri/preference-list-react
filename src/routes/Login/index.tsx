import React, {FC, useContext} from 'react';
import {Button, Space} from "antd";
import {UserContext} from "../../context/UserContext";
import styled from "styled-components";

const Wrapper = styled(Space)`
  padding: 5% 0;
  margin: 0 50px;
  width: 100%;
  display: grid;
  place-items: center;
  background: ${(props) => props.theme.antd.colorBgElevated};
`;

const LoginRoute: FC = () => {
    const {login, loading} = useContext(UserContext);

    return <Wrapper>
        <span>Login</span>
        <Button type={"primary"} onClick={login} disabled={loading}>Sign in with Google</Button>
    </Wrapper>
}

export default LoginRoute