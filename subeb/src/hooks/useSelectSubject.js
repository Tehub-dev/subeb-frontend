import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useSelectSubject = () => {
    return useContext(AuthContext);
}

export default useSelectSubject;