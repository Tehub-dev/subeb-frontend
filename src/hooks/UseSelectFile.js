import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useSelectFile = () => {
    return useContext(AuthContext);
}

export default useSelectFile;