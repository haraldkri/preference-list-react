import {createContext} from "react";
import {User} from "firebase/auth"

interface IUserContext {
    user: User | null,
    logout: () => void,
    login: () => void,
    loading: boolean
}

export const UserContext = createContext<IUserContext>({
    user: null,
    loading: false,
    login: () => {
    },
    logout: () => {
    }
});