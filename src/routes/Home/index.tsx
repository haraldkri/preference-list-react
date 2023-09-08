import React, {FC, useContext} from 'react';
import logo from "../../logo.svg";
import styled from "styled-components";
import Center from "../../components/Center";
import {Button} from "antd";
import {UserContext} from "../../context/UserContext";

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const HomeRoute: FC = () => {
    const {logout, user} = useContext(UserContext);

    return <div>
        <Logo src={logo} alt="logo"/>
        <Center>
            <span>Welcome {user?.displayName}!</span>
            <Button type="primary" onClick={logout}>Sign out</Button>
        </Center>
    </div>

}

export default HomeRoute