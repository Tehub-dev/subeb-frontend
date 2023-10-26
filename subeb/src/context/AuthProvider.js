import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [displayOverlay, setDisplayOverlay] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [successDisplay, setSuccessDisplay] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [isEdit, setIsEdit] = useState(false);

  return (
    <AuthContext.Provider
      value={{displayOverlay, setDisplayOverlay, selectedFile, setSelectedFile,successMsg, setSuccessMsg,successDisplay, setSuccessDisplay,isEdit, setIsEdit}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;