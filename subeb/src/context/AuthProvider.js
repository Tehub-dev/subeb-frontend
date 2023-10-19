import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [displayOverlay, setDisplayOverlay] = useState(false);

  return (
    <AuthContext.Provider
      value={{displayOverlay, setDisplayOverlay}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;