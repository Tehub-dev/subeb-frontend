import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useOpenMenu = () => {
    return useContext(AuthContext);
}

export default useOpenMenu;