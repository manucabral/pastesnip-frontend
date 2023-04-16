import { Link } from "react-router-dom"

/**
 * Navbar component for the application.
 * @returns {JSX.Element} The Navbar component.
 */
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full px-4 py-2 sticky top-0 bg-slate-800">
            <div className="flex items-center">
                <Link to="/" className="text-white text-2xl font-semibold">Pastesnip</Link>
            </div>
            <div className="flex items-center">
                <Link to="/" className="px-4 py-2 text-sm font-semibold text-white bg-slate-700 rounded hover:bg-slate-600">Home</Link>
            </div>
            <div className="flex items-center">
                <Link to="signin" className="px-4 py-2 text-sm font-semibold text-white bg-slate-700 rounded hover:bg-slate-600">Login</Link>
                <Link to="signup" className="px-4 py-2 ml-2 text-sm font-semibold text-white bg-slate-700 rounded hover:bg-slate-600">Register</Link>
            </div>
        </nav>
    )
}