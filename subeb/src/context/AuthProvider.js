import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [displayOverlay, setDisplayOverlay] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

  return (
    <AuthContext.Provider
      value={{displayOverlay, setDisplayOverlay, selectedFile, setSelectedFile}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;