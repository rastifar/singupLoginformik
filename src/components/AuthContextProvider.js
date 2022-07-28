import React, { createContext,useState  } from 'react';

export const isAuthenticatedContext = createContext();

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const value = {
        user,
        addToUser: (item) => {
            setUser(item)           
        },
        removeFromUser:()=>{setUser("")}
    }

    return (
        <isAuthenticatedContext.Provider value={value}>
            {children}
        </isAuthenticatedContext.Provider>
    );
};

export default AuthContextProvider;