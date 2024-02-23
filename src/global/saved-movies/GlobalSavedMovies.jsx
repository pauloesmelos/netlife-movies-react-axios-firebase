import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase/firebase";
import { GlobalUser } from "../user/GlobalUser";

export const GlobalSavedMovies = React.createContext();
export const GlobalSavedMoviesProvider = ({ children }) => {
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const { user, isLogged } = React.useContext(GlobalUser);

  const handleSavedMovies = async (movie) => {
    try {
      if (isLogged()) {
        const reference = doc(db, "users", `${user?.email}`);
        await updateDoc(reference, {
          savedMovies: arrayUnion({
            id: movie?.id,
            title: movie?.title,
            img: movie?.backdrop_path,
          }),
        });
      } 
    } catch (erro) {
      console.log(erro);
    }
  };
  const handleRemoveMovie = async (id) => {
    try {
      const reference = doc(db, "users", `${user?.email}`);
      const filterMovies = savedMovies?.filter((movie) => movie.id !== id);
      await updateDoc(reference, {
        savedMovies: filterMovies
      });
    } catch(erro) {
      console.log(erro);
    }
  }

  React.useEffect(() => {
    const reference = doc(db, "users", `${user?.email}`);
    onSnapshot(reference, (info) => {
      setSavedMovies(info.data()?.savedMovies);
      setUsername(info.data()?.username);
    });
  }, [user?.email]);

  return (
    <GlobalSavedMovies.Provider value={{ savedMovies, username, handleSavedMovies, handleRemoveMovie }}>
      {children}
    </GlobalSavedMovies.Provider>
  );
};
