import {Outlet} from "react-router-dom"
import {FC, useContext} from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import {UserContext} from "../../context/UserContext";

const AuthRoute: FC = () => {
    const {loading} = useContext(UserContext);

    if (loading) return <LoadingSpinner/>

    return <Outlet/>
}

export default AuthRoute