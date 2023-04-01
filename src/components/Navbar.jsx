export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full px-4 py-2 sticky top-0 bg-slate-800">
            <div className="flex items-center">
                <span className="text-xl font-semibold text-white">Pastesnip</span>
            </div>
            <div className="flex items-center">
                <button className="px-4 py-2 text-sm font-semibold text-white bg-slate-700 rounded hover:bg-slate-600">Login</button>
                <button className="px-4 py-2 ml-2 text-sm font-semibold text-white bg-slate-700 rounded hover:bg-slate-600">Sign Up</button>
            </div>
        </nav>
    )
}