import 
{ createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { auth, db } from "../../firebase/firebase.js";

export const GlobalUser = React.createContext();
export const GlobalUserProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [error, setError] = React.useState("");

  const getTypeError = (message) => {
    if(message === "auth/email-already-in-use") {
      setError("Email already in use.");
    }
  }
  const createUser = async (email, password, username) => {
    setError("");
    try {
        /* salvar em autenticações o novo user*/
        await createUserWithEmailAndPassword(auth, email, password);
        /* salvar no db quando criar um novo user */
        setDoc(doc(db, "users", email), {
            savedMovies: []
        });
        return true;
    } catch(erro) {
        getTypeError(erro.code);
        return false;
    }
  }
  const isLogged = () => {
    if(user?.email) return true;
    else return false;
  }
  const login = async (email, password) => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch(erro) {
      setError("Incorrect email or password.");
      return false;
    }
  }
  const logout = async () => {
    try { 
      await signOut(auth);
      window.location.reload();
      return true;
    } catch(erro) {
      console.log(erro);
      return false;
    }
  }

  React.useEffect(() => {
    const changed = onAuthStateChanged(auth, (newUser) => {
      setUser(newUser);
    })
    return () => {
      changed();
    }
  }, []);

  return (
    <GlobalUser.Provider value={{user, setUser, createUser, isLogged, logout, login, error, setError }}>
      { children }
    </GlobalUser.Provider>
  )
}