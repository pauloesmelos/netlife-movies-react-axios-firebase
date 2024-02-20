import React from "react";

export const GlobalSearchNav = React.createContext();
export const GlobalSearchNavProvider = ({ children }) => {
    const [searchNav, setSearchNav] = React.useState(false);

    return (
        <GlobalSearchNav.Provider value={{ searchNav, setSearchNav }}>
            { children }
        </GlobalSearchNav.Provider>
    )
};