import React, {FC} from 'react';
import logo from "../../logo.svg";
import styled from "styled-components";
import {Divider, Layout} from "antd";
import UserAvatar from "../../components/UserAvatar";
import FlexGrow from '../../components/FlexGrow';
const { Content, Footer, Header } = Layout;

const Logo = styled.img`
  height: 100%;
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

const CustomHeader = styled(Header)`
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding-block: 8px;
`;

const CustomLayout = styled(Layout)`
  width: 100%;
`;

const CustomContent = styled(Content)`
  padding: 0 50px;
  display: flex;
  margin: 24px 0 0;
`;

const Main = styled(FlexGrow)`
  background: ${({theme}) => theme.antd?.colorBgContainer};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

const Column = styled(FlexGrow)`
  padding: 20px;
  text-align: center;
`;

const CustomFooter = styled(Footer)`
  text-align: center;
`;

const CustomDivider = styled(Divider)`
  height: 100%;
`;

const HomeRoute: FC = () => {
    return <CustomLayout>
        <CustomHeader>
            <Logo src={logo} alt="logo"/>
            <UserAvatar/>
        </CustomHeader>
        <CustomContent>
            <Main>
                <Column>1</Column>
                <CustomDivider type="vertical"/>
                <Column>2</Column>
            </Main>
        </CustomContent>
        <CustomFooter>©2023 Created by Harald Kriebisch</CustomFooter>
    </CustomLayout>
}

export default HomeRoute