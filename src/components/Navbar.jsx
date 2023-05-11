import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { useUserContext } from '../context/UserContext'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

/**
 * Navbar component for the application.
 * @returns {JSX.Element} The Navbar component.
 */
export default function Navbar() {
    const navigate = useNavigate()
    const { user, setUser } = useUserContext()
    const { signOut } = useAuth({ setUser })
    const onUserSignOut = () => {
        signOut()
        navigate('/home')
    }
    return (
        <nav className="flex bg-gradient-to-r from-blue-400/60 to-blue-400/10 items-center justify-between flex-wrap top-0 sticky p-2 px-8 bg-opacity-80">
            <div className="flex items-center flex-shrink-0 text-white mr-8">
                <Link to="/">
                    <span className="font-semibold text-xl tracking-tight">
                        Pastesnip
                    </span>
                </Link>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-md lg:flex-grow">
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-400 mr-4"
                    >
                        FAQ
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-400 mr-4"
                    >
                        Blog
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-400 mr-4"
                    >
                        Contact
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-400 mr-4"
                    >
                        API
                    </a>
                </div>
                <div>
                    {user.username ? (
                        <>
                            <Link
                                to="/newpaste"
                                className="inline-block ml-2 text-sm px-4 py-2 leading-none border rounded text-white font-bold border-green-500 hover:border-transparent hover:text-black hover:bg-green-500/70 mt-4 lg:mt-0 mr-6"
                            >
                                New Paste
                            </Link>
                            <Link
                                to="/profile"
                                className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-400 font-bold border-blue-500 hover:border-transparent hover:text-white hover:bg-blue-500/60 mt-4 lg:mt-0"
                            >
                                Profile
                            </Link>
                            <button
                                onClick={onUserSignOut}
                                className="inline-block ml-2 text-sm px-4 py-2 leading-none border rounded text-blue-400 font-bold border-indigo-500 hover:border-transparent hover:text-white hover:bg-blue-500/70 mt-4 lg:mt-0 mr-6"
                            >
                                Sign Out
                            </button>
                            <Link to="https://www.github.com/pastesnip">
                                <FaGithub className="inline-flex flex-shrink-0 text-xl" />
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/signup"
                                className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-400 font-bold border-blue-500 hover:border-transparent hover:text-white hover:bg-blue-500/60 mt-4 lg:mt-0"
                            >
                                Sign Up
                            </Link>
                            <Link
                                to="/signin"
                                className="inline-block ml-2 text-sm px-4 py-2 leading-none border rounded text-blue-400 font-bold border-indigo-500 hover:border-transparent hover:text-white hover:bg-blue-500/70 mt-4 lg:mt-0 mr-6"
                            >
                                Sign In
                            </Link>
                            <Link to="https://www.github.com/pastesnip">
                                <FaGithub className="inline-flex flex-shrink-0 text-xl" />
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}
