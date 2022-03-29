import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// Context API
const INITIAL_STATE = {
    user: {
        _id: "62431c304f7d4a66bd05f592",
        username: "jane",
        email: "jane@gmail.com",
        profilePicutre: "person/1.jpeg",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        followings: [],
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error, 
            dispatch
            }}
            >
                {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;