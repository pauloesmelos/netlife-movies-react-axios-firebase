import { doc, onSnapshot } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase/firebase";
import { GlobalUser } from "../user/GlobalUser";

export const GlobalSavedMovies = React.createContext();
export const GlobalSavedMoviesProvider = ({ children }) => {
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const { user } = React.useContext(GlobalUser);

  React.useEffect(() => {
    const reference = doc(db, "users", `${user?.email}`);
    onSnapshot(reference, (info) => {
        setSavedMovies(info.data()?.savedMovies);
        setUsername(info.data()?.username);
    });
  }, [user?.email]);

  return (
    <GlobalSavedMovies.Provider value={{ savedMovies, username }}>
      { children }
    </GlobalSavedMovies.Provider>
  )
}