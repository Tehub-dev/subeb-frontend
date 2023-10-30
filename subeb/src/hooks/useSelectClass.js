import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useSelectClass = () => {
    return useContext(AuthContext);
}

export default useSelectClass;