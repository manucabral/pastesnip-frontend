import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function RequireAuth({ children }) {
    const { user } = useUserContext();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (user.id === "") return <Navigate to="/signin" state={{ from }} />;
    return children;
}