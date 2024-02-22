import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { auth, db } from "../../firebase/firebase.js";

export const GlobalUser = React.createContext();
export const GlobalUserProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false); /* login */

  const getTypeError = (message) => {
    if(message === "auth/email-already-in-use") {
      setError("Email already in use.");
    }
  }
  const createUser = async (email, password, username) => {
    setError("");
    setLoading(true);
    try {
        /* salvar em autenticações o novo user*/
        await createUserWithEmailAndPassword(auth, email, password);
        /* salvar no db quando criar um novo user */
        setDoc(doc(db, "users", email), {
            savedMovies: [],
            username: username
        });
        return true;
    } catch(erro) {
        getTypeError(erro.code);
        return false;
    } finally {
      setLoading(false);
    }
  }
  const isLogged = () => {
    if(user?.email) return true;
    else return false;
  }
  const login = async (email, password) => {
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch(erro) {
      setError("Incorrect email or password.");
      return false;
    } finally {
      setLoading(false);
    }
  }
  const logout = async () => {
    setLoading(true);
    try { 
      await signOut(auth);
      window.location.reload();
      return true;
    } catch(erro) {
      console.log(erro);
      return false;
    } finally {
      setLoading(false);
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
    <GlobalUser.Provider value={{user, setUser, createUser, isLogged, logout, login, error, setError, loading }}>
      { children }
    </GlobalUser.Provider>
  )
}