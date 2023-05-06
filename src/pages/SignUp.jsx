import { Link } from "react-router-dom"
import { useNotificationContext } from "../context/NotificationContext";
import { useNavigate } from "react-router-dom";
import { M_REGISTER } from "../graphql/mutations";
import { useRegister } from "../hooks/useRegister";
import { useMutation } from "@apollo/client";
import { useEffect } from "react";

import Loading from "../components/Loading";

export default function SignUp() {
    const navigate = useNavigate();
    const { setNotification } = useNotificationContext();
    const [ registerMutation, { loading }] = useMutation(M_REGISTER);
    const { handleSubmit } = useRegister({ setNotification, registerMutation, navigate })
    useEffect(() => {
        document.title = "Sign Up - Pastesnip"
    }, [])
    if (loading) return <Loading />;
    return (
        <div className="flex flex-col w-full items-center justify-center min-h-fit gap-10">
            <div className="flex flex-col items-center lg:w-1/2 w-3/4 gap-5 text-center">
                <h1 className="text-white text-3xl mt-10 font-bold">Sign Up</h1>
                <h2 className="text-white text-xl">Create your account to get started, it's free!</h2>
                <p className="text-white">Already have an account? <Link to="/signin" className="text-slate-400">Sign In</Link></p>
            </div>
            <form className="flex flex-col items-center justify-center lg:w-1/2 w-full" onSubmit={handleSubmit}>
                <input name="username" type="text" placeholder="Username" className="bg-gray-800 text-white rounded-md p-2 my-2 lg:w-1/2 w-3/5" />
                <input name="email" type="email" placeholder="Email" className="bg-gray-800 text-white rounded-md p-2 my-2 lg:w-1/2 w-3/5" />
                <input name="password" type="password" placeholder="Password" className="bg-gray-800 text-white rounded-md p-2 my-2 lg:w-1/2 w-3/5" />
                <input name="confirmPassword" type="password" placeholder="Confirm Password" className="bg-gray-800 text-white rounded-md p-2 my-2 lg:w-1/2 w-3/5" />
                <button className="bg-gray-800 text-white rounded-md hover:bg-slate-500 p-2 my-2 w-1/2">Create my account</button>
            </form>
        </div>
    )
}