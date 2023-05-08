import { useEffect } from "react"

export default function NewPaste() {
    useEffect(() => {
        document.title = "New Paste - Pastesnip"
    }, [])
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center lg:w-1/2 w-3/4 gap-5 text-center">
                <h1 className="text-white text-3xl mt-10 font-bold">New Paste</h1>
                <h2 className="text-white text-xl">Create a new paste.</h2>
            </div>
        </div>
    )
}
