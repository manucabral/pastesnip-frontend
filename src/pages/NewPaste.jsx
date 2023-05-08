import { useEffect } from 'react'

export default function NewPaste() {
    useEffect(() => {
        document.title = 'New Paste - Pastesnip'
    }, [])
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center lg:w-1/2 w-3/4 gap-5 text-center">
                <h1 className="text-white text-3xl mt-10 font-bold">
                    New Paste
                </h1>
            </div>
            <div className="flex flex-col items-center lg:w-1/2 w-3/4 gap-5 text-center">
                <textarea
                    className="w-full h-96 bg-gray-800 text-white outline-none p-5 rounded-lg"
                    placeholder="Paste your code here..."
                ></textarea>
                <div className="flex flex-row items-center justify-between w-full">
                    <input
                        className="w-1/2 bg-gray-800 outline-none text-white p-5 rounded-lg"
                        placeholder="Title"
                    />
                </div>
            </div>
        </div>
    )
}
