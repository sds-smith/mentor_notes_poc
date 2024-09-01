import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    function logIn(role) {
        const users = {
            student_mentor: {
                first: 'Sally',
                last: 'Student',
                isAdmin: true,
                role
            },
            faculty: {
                first: 'Fanny',
                last: 'Faculty',
                role
            }
        }
        setCurrentUser(users[role]);
    }

    function logOut() {
        setCurrentUser(null);
    }

    const value={
        currentUser,
        logIn,
        logOut
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
    const ctx = useContext(AuthContext);
    return ctx;
}