import React from "react";

export const GlobalSearchNav = React.createContext();
export const GlobalSearchNavProvider = ({ children }) => {
    const [searchNav, setSearchNav] = React.useState(false);
    const handleClick = ({ target }) => {
        if(target.getAttribute("aria-label") !== "search-navbar" && searchNav) {
            setSearchNav(false);
        }
    }
    const closeClickDocument = () => {
        document.addEventListener("click", handleClick);
    }
    React.useEffect(() => {
        return () => {
            closeClickDocument();
        }
    }, []); /* fechar a div apos clicar em outra parte do documento */

    return (
        <GlobalSearchNav.Provider value={{ searchNav, setSearchNav }}>
            { children }
        </GlobalSearchNav.Provider>
    )
};