import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    
    useEffect(() => {
        document.title = "404 - Pastesnip"
    }, [])
    
    return (
        <div className="flex flex-col items-center justify-center min-h-fit mt-[100px]">
            <h1 className="text-9xl font-bold text-red-500">404</h1>
            <h2 className="text-3xl font-bold text-gray-500">Oops! Page not found.</h2>
            <p className="text-gray-500">The page you are looking for does not exist.</p>
            <div className="flex flex-col items-center justify-center mt-10">
            <Link to="/" className="px-4 py-2 text-sm font-semibold text-white bg-slate-700 rounded hover:bg-slate-600">Go to Home</Link>
            </div>
        </div>
        
    )
}