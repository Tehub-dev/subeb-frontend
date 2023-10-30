import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useBackSub = () => {
    return useContext(AuthContext);
}

export default useBackSub;