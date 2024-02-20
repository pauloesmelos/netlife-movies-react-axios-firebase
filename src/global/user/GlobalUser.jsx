import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc } from "firebase/firestore";
import React from "react";
import { auth, db } from "../../firebase/firebase.js";

export const GlobalUser = React.createContext();
export const GlobalUserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const createUser = async (email, password, username) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        const doc = doc(db, "user", email); /* salvar no db quando criar um novo user */
        setDoc(doc, {
            savedMovies: []
        });
        return true;
    } catch(erro) {
        console.log(erro);
        return false;
    }
  }
  React.useEffect(() => {

  }, []);
  return (
    <GlobalUser.Provider value={{user, setUser, createUser }}>
      { children }
    </GlobalUser.Provider>
  )
}