import { useEffect } from "react"

export default function Maintenance() {
    useEffect(() => {
        document.title = "Maintenance - Pastesnip"
    }, [])
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-white text-3xl">Oops!</h1>
            <p className="text-white">We are currently under maintenance. Please try again later.</p>
        </div>
    )
}