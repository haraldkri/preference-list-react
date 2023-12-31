import React from "react";
import {theme} from "antd";
import {ThemeProvider} from "styled-components";

// type Props = PropsWithChildren & {
//     theme: DefaultTheme & {
//         antd: GlobalToken
//     }
// }

const CustomThemeProvider = ({children}: React.PropsWithChildren) => {
    const {token} = theme.useToken();
    return (
        <ThemeProvider theme={{antd: token}}>
            {children}
        </ThemeProvider>
    );
};

export default CustomThemeProvider