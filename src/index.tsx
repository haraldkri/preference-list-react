import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeRoute from "./routes/Home";
import LoadingSpinner from "./components/LoadingSpinner";
import SignupRoute from "./routes/Auth/Signup";
import LoginRoute from "./routes/Auth/Login";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeRoute/>,
        loader: () => <LoadingSpinner/>,
        children: [
            {
                path: "signup",
                element: <SignupRoute/>,
            },
            {
                path: "login",
                element: <LoginRoute/>,
            }

        ],
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
