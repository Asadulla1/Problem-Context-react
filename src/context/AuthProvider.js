import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
export const AuthContext = createContext();
const AuthProvider = ({ childern }) => {
  const allContext = useFirebase();
  return (
    <div>
      <AuthContext.Provider value={allContext}>{childern}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
