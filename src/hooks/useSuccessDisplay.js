import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useSuccessDisplay = () => {
    return useContext(AuthContext);
}

export default useSuccessDisplay;