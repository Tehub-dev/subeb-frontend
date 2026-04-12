import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useSuccessMsg = () => {
    return useContext(AuthContext);
}

export default useSuccessMsg;