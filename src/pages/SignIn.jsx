import { Link, Navigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { M_LOGIN } from '../graphql/mutations'
import { useEffect } from 'react'
import { useUserContext } from '../context/UserContext'

import Loading from '../components/Loading'

export default function SignIn() {
    const { user } = useUserContext()
    const [loginMutation, { loading }] = useMutation(M_LOGIN)
    const { handleSubmit } = useLogin()

    useEffect(() => {
        document.title = 'Sign In - Pastesnip'
    }, [])

    if (loading) return <Loading />
    if (user.id !== '') return <Navigate to="/" />
    return (
        <div className="flex flex-col w-full items-center justify-center min-h-fit gap-10">
            <div className="flex flex-col items-center lg:w-1/2 w-3/4 gap-5 text-center">
                <h1 className="text-white text-3xl mt-10 font-bold">Sign In</h1>
                <h2 className="text-white text-xl">
                    It's good to see you again!
                </h2>
                <p className="text-white">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-slate-400">
                        Sign Up
                    </Link>
                </p>
            </div>
            <form
                className="flex flex-col items-center justify-center lg:w-1/2 w-full"
                onSubmit={(e) => handleSubmit(e, loginMutation)}
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="bg-gray-800 text-white rounded-md p-2 my-2 lg:w-1/2 w-3/5"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="bg-gray-800 text-white rounded-md p-2 my-2 lg:w-1/2 w-3/5"
                />
                <button className="bg-gray-800 text-white rounded-md hover:bg-slate-500 p-2 my-2 w-1/2">
                    Sign In
                </button>
            </form>
        </div>
    )
}
