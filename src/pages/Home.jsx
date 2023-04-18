import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Home() {
    useEffect(() => {
        document.title = "Pastesnip - Your pastes, your way."
    }, [])
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-6xl font-bold"> Pastesnip </h1>
            <p className="lg:mt-3 text-2xl"> Your pastes, your way. </p>
            <div className="flex flex-col flex-wrap items-center justify-around lg:mt-6 sm:w-full gap-2">
                <Link to="/signin" className="lg:mt-4 mt-10 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600">
                    <h3 className="w-full m-2 text-left text-blue-600"> Log In &rarr; </h3>
                    <p className="w-full m-2">
                        Login to your account to access your pastes.
                    </p>
                </Link>
                <Link to="/signup" className="mt-4 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600">
                    <h3 className="w-full m-2 text-left text-blue-600"> Sign Up &rarr; </h3>
                    <p className="w-full m-2">
                        Create an account to start saving your pastes.
                    </p>
                </Link>
            </div>
            <div className="flex flex-col flex-wrap items-center justify-around max-w-4xl sm:w-full gap-2">
                <h3 className="mt-10 text-3xl font-bold"> Or, </h3>
                <Link to="/pastes" className="mt-4 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600">
                    <h3 className="w-full m-2 text-left text-blue-600"> View Public Pastes &rarr; </h3>
                    <p className="w-full m-2">
                        View all public pastes without logging in.
                    </p>
                </Link>
            </div>
        </div>
    )
}