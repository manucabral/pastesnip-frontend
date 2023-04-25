import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Home() {
    useEffect(() => {
        document.title = "Pastesnip - Your pastes, your way."
    }, [])
    return (
        <div className="flex flex-col items-center text-center mt-14">
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> 
                        Paste<span className="text-blue-500">snip</span> 
                    </h1>
                    <p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300">
                        The best place to store your pastes, share with the community, comment and interact with other users
                        and remember... <span className="text-blue-500 ml-2 font-semibold">your pastes, your way!</span>
                    </p>
                    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link to='/signin' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Sign in &rarr;
                        </Link>
                        <Link to='/signup' className="shadow-lg shadow-blue-900/60 opacity-80 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 focus:ring-4 dark:text-white border-blue-500/60 hover:bg-blue-900 focus:ring-gray-800 hover:shadow-lg hover:shadow-blue-500/70">
                            Register
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}