import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useNotificationContext } from "../context/NotificationContext"
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { M_LOGIN } from "../graphql/mutations";

export default function SignIn() {
    const navigate = useNavigate();
    const { notification, setNotification } = useNotificationContext();
    const [loginMutation, { loading, error, data }] = useMutation(M_LOGIN);
    const { handleSubmit } = useAuth({ notification, setNotification, loginMutation, navigate });

    return (
        <div className="flex flex-col w-full items-center justify-center min-h-fit gap-10">
            <h1 className="text-white text-3xl mt-10">Sign In to your account</h1>
            <p className="text-white">Don't have an account? <Link to="/signup" className="text-slate-400">Sign Up</Link></p>
            <form className="flex flex-col items-center justify-center lg:w-1/2 w-full" onSubmit={handleSubmit}>
                <input name="email" type="text" placeholder="Email" className="bg-gray-800 text-white rounded-md p-2 my-2 lg:w-1/2 w-3/5" />
                <input name="password" type="password" placeholder="Password" className="bg-gray-800 text-white rounded-md p-2 my-2 lg:w-1/2 w-3/5" />
                <button className="bg-gray-800 text-white rounded-md hover:bg-slate-500 p-2 my-2 w-1/2">Sign In</button>
            </form>
        </div>
    )
}