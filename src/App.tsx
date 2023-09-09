import React, {FC} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {initializeApp} from "firebase/app";
import {ConfigProvider, theme} from "antd";
import LoadingSpinner from "./components/LoadingSpinner";
import HomeRoute from "./routes/Home";
import {config} from "./config";
import AuthRoute from "./routes/Auth";
import LoginRoute from "./routes/Login";
import UserProvider from "./provider/UserProvider";

// initialize firebase app
initializeApp(config.firebaseConfig)

const App: FC = () => {
    const router = createBrowserRouter([

        {
            path: "",
            element: <UserProvider><AuthRoute/></UserProvider>,
            loader: () => <LoadingSpinner/>,
            children: [
                {
                    path: "login",
                    element: <LoginRoute/>
                },
                {
                    path: "",
                    element: <HomeRoute/>
                }
            ]
        },
    ]);

    return <ConfigProvider
        theme={{
            // 1. Use dark algorithm
            algorithm: theme.darkAlgorithm,

            // 2. Combine dark algorithm and compact algorithm
            // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
        }}
    >
        <RouterProvider router={router}/>
    </ConfigProvider>
}

export default App