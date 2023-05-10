import { useEffect, useState } from 'react'
import { useTextArea } from '../hooks/useTextArea'

export default function NewPaste() {
    const [tabSpaces, setTabSpaces] = useState(4)
    const { handleKeyDown } = useTextArea({ tabSpaces })
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
            <div className="flex flex-col items-center w-full lg:w-1/2 gap-5 text-center">
                <textarea
                    onKeyDown={handleKeyDown}
                    className="w-full h-96 bg-gray-800 text-white outline-none p-5 rounded-lg"
                    placeholder="Paste your code here..."
                ></textarea>
                <form className="flex flex-col items-center justify-between w-full gap-2">
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:w-1/2 w-full">
                        <label className="text-white text-lg"> Title </label>
                        <input
                            className="w-1/2 bg-gray-800 outline-none text-white p-2 rounded-lg"
                            placeholder="Title"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:w-1/2 w-full">
                        <label className="text-white text-lg">
                            Syntax Highlighting
                        </label>
                        <select className="w-1/2 bg-gray-800 outline-none text-white p-2 rounded-lg">
                            <option value="javascript">JavaScript</option>
                            <option value="python">Python</option>
                        </select>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:w-1/2 w-full">
                        <label className="text-white text-lg"> Public </label>
                        <select className="w-1/2 bg-gray-800 outline-none text-white p-2 rounded-lg">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:w-1/2 w-full">
                        <label className="text-white text-lg">Tab Spaces</label>
                        <input
                            className="w-1/2 bg-gray-800 outline-none text-white p-2 rounded-lg"
                            type="number"
                            value={tabSpaces}
                            onChange={(e) => setTabSpaces(e.target.value)}
                        />
                    </div>
                    <button className="w-1/2 font-semibold text-green-500 rounded-sm border border-green-700 py-2 transition-colors hover:bg-green-500/20 hover:text-white">
                        Create new paste
                    </button>
                </form>
            </div>
        </div>
    )
}
