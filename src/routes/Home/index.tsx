import React, {FC} from 'react';
import logo from "../../logo.svg";
import styled from "styled-components";
import Center from "../../components/Center";
import {Button} from "antd";
import {getAuth, signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";

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
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSignout = () =>{
        signOut(auth);
        navigate("/", {replace: true})
    }

    return <div>
        <Logo src={logo} alt="logo"/>
        <Center>
            <span>Welcome!</span>
            <Button type="primary" onClick={handleSignout}>Sign out</Button>
        </Center>
    </div>

}

export default HomeRoute