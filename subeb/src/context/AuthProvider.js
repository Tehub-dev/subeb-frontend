import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [displayOverlay, setDisplayOverlay] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [successDisplay, setSuccessDisplay] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [selectSubject, setSelectSubject] = useState();
    const [selectClass, setSelectClass] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

  return (
    <AuthContext.Provider
      value={{displayOverlay, setDisplayOverlay, selectedFile, setSelectedFile,successMsg, setSuccessMsg,successDisplay, setSuccessDisplay,isEdit, setIsEdit, selectSubject, setSelectSubject,openMenu, setOpenMenu,selectClass, setSelectClass}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;