import React from "react";

const UserContext = React.createContext({
    user: {
        id: "",
        username: "",
        email: "",
    },
    setUser: () => {},
});

const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({
        id: "",
        username: "",
        email: "",
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

const useUserContext = () => React.useContext(UserContext);

export { UserProvider, useUserContext };