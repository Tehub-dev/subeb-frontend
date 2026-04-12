import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useOverlay = () => {
    return useContext(AuthContext);
}

export default useOverlay;