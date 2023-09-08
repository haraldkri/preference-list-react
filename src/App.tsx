import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import HomeRoute from "./routes/Home";
import React, {FC} from "react";
import {initializeApp} from "firebase/app";
import {config} from "./config";
import AuthRoute from "./routes/Auth";
import LoginRoute from "./routes/Login";

// initialize firebase app
initializeApp(config.firebaseConfig)

const App: FC = () => {
    const router = createBrowserRouter([
        {
            path: "login",
            element: <LoginRoute/>
        },
        {
            path: "",
            element: <AuthRoute/>,
            loader: () => <LoadingSpinner/>,
            children: [
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