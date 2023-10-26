import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useIsEdit = () => {
    return useContext(AuthContext);
}

export default useIsEdit;