import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import HomeRoute from "./routes/Home";
import React, {FC} from "react";
import {initializeApp} from "firebase/app";
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

    return <RouterProvider router={router}/>
}

export default App