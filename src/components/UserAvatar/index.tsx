import React from "react";
import {Avatar, Badge} from "antd";
import {UserOutlined} from "@ant-design/icons";
import styled from "styled-components";

const CustomBadge = styled(Badge)`
  margin: auto 0;
`;

// TODO add logout button, intro and username
// <Center>
//     <span>Welcome {user?.displayName}!</span>
//     <Button type="primary" onClick={logout}>Sign out</Button>
// </Center>

const UserAvatar = () => {
    const shareRequests = [];
    return <CustomBadge dot={shareRequests.length > 0}>
        <Avatar shape="square" icon={<UserOutlined/>}/>
    </CustomBadge>
}

export default UserAvatar