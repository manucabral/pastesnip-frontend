import { Link } from 'react-router-dom'
import { useNotificationContext } from '../context/NotificationContext'
import { useNavigate } from 'react-router-dom'
import { M_REGISTER } from '../graphql/mutations'
import { useRegister } from '../hooks/useRegister'
import { useMutation } from '@apollo/client'
import { useEffect } from 'react'

import Loading from '../components/Loading'

export default function SignUp() {
    const navigate = useNavigate()
    const { setNotification } = useNotificationContext()
    const [registerMutation, { loading }] = useMutation(M_REGISTER)
    const { handleSubmit } = useRegister({
        setNotification,
        registerMutation,
        navigate,
    })
    useEffect(() => {
        document.title = 'Sign Up - Pastesnip'
    }, [])
    if (loading) return <Loading />
    return (
        <section>
            <div className="flex flex-col md:mt-10 items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-blue-800/30 border-blue-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white-900 md:text-2xl">
                            Sign up in Paste
                            <span className="text-blue-500">snip</span>
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label
                                    for="username"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Your username
                                </label>
                                <input
                                    name="username"
                                    type="text"
                                    className="bg-blue-800/30 border border-blue-600 sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="imgreat87"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    className="bg-blue-800/30 border border-blue-600 text-white sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="imgreat87@gmail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="password"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Your password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    className="bg-blue-800/30 border border-blue-600 text-white sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="XXXXXXX"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="confirmPassword"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Confirm password
                                </label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    className="bg-blue-800/30 border border-blue-600 text-white sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="XXXXXXX"
                                    required
                                />
                            </div>
                            <button className="w-full font-semibold text-blue-500 rounded-sm border border-blue-700 py-2 transition-colors hover:bg-blue-500/20 hover:text-white">
                                {' '}
                                Create my account{' '}
                            </button>
                            <p className="text-sm font-light text-gray-300">
                                Already have an account?{' '}
                                <Link
                                    to="/signin"
                                    className="font-medium text-blue-600 hover:underline"
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
