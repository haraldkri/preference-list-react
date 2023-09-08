import {Outlet, useNavigate} from "react-router-dom"
import {FC, useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import LoadingSpinner from "../../components/LoadingSpinner";

type Props = {}

const AuthRoute: FC = (props: Props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                console.log('unauthorized');
                navigate("/login", {replace: true})
            }
        });

        return () => AuthCheck();
    }, [auth]);

    if (loading) return <LoadingSpinner/>

    return <Outlet/>
}

export default AuthRoute