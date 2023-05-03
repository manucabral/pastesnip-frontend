import { useEffect } from "react"
import { Link } from "react-router-dom"
import Contact from "../components/Contact"

export default function Home() {
    useEffect(() => {
        document.title = "Pastesnip - Your pastes, your way."
    }, [])
    return (
        <div className="w-full">
            <section>
                <div className="flex flex-col items-center py-8 px-4 text-center lg:py-16 lg:px-12">
                    <div className="text-center py-4 lg:px-4">
                        <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex " role="alert">
                            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-sm font-bold mr-3">UPCOMING 🎉</span>
                            <a href="https://github.com/TeamParches/pastesnip-backend" className="font-semibold mr-2 text-left flex-auto">Get up to date on our Blog section!</a>
                        </div>
                    </div>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Paste<span className="text-blue-500">snip</span>
                    </h1>
                    <p className="mb-8 text-lg lg:w-3/4 font-normal text-slate-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300">
                        The best place to store your pastes, share with the community, comment and interact with other users
                        and remember... <span className="text-blue-500 ml-2 font-semibold">your pastes, your way!</span>
                    </p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link to='/signin' className="shadow-lg shadow-white/20 opacity-80 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center hover:text-gray-900 rounded-lg border border-gray-300 focus:ring-4 dark:text-white border-white/60 hover:bg-white focus:ring-gray-800 hover:shadow-lg hover:shadow-white/70 hover:transition-all hover:delay-[0.1s]">
                            Sign in &rarr;
                        </Link>
                        <Link to='/signup' className="shadow-lg shadow-blue-900/60 opacity-80 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 focus:ring-4 dark:text-white border-blue-500/60 hover:bg-blue-900 focus:ring-gray-800 hover:shadow-lg hover:shadow-blue-500/70 hover:transition-all hover:delay-[0.1s]">
                            Register
                        </Link>
                    </div>
                </div>
            </section>
            <section className="flex flex-col bg-blue-900/20 py-20 text-2xl md:text-4xl">
                <div className="container mx-auto px-11">
                    <p className="leading-tight max-w-5xl mx-auto text-2xl tracking-tight">
                        <h2 className="text-blue-500 mb-6 text-4xl">
                            Here on pastesnip
                        </h2>
                        <strong>You can create</strong> your own pastes
                        and <strong>share them</strong> with the community, is a great way to
                        share your code with other people and get feedback from them,
                        the idea behind this website is to make it more convenient
                        for users to storage their pastes or important issues inside here.
                    </p>
                </div>
            </section>
            <section className="bg-zinc-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight text-blue-500"> Designed for your easily </h2>
                        <p className="m:text-xl text-white">
                            We have a lot of features that can you make
                            your code stuff more easily, practical and allows you to feedback from other users
                            and interact with other people that have the same interests as you
                        </p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center border border-blue-500/60 text-2xl items-center mb-4 w-10 h-10 rounded-md lg:h-12 lg:w-12">
                                🪶
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white"> Lightweight </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We have a lightweight design that allows you to navigate easily and
                                make your experience more enjoyable, you can navigate through the website
                                without any problem
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center border border-blue-500/60 text-2xl items-center mb-4 w-10 h-10 rounded-md lg:h-12 lg:w-12">
                                🔒
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white"> Secure </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We have a secure system that allows you to store your pastes,
                                you can private and only you can see it or you can make it public
                                depending as your needs
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center border border-blue-500/60 text-2xl items-center mb-4 w-10 h-10 rounded-md lg:h-12 lg:w-12">
                                🧠
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white"> Multisyntax </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                You can create pastes with multiple syntaxes, we have a lot of
                                syntaxes that you can use to make your code more readable and
                                understandable for other users, you can create even <strong>text files</strong>
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center border border-blue-500/60 text-2xl items-center mb-4 w-10 h-10 rounded-md lg:h-12 lg:w-12">
                                🌍
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white"> Interactivity </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Pastesnip allows you to interact with other users, you can comment
                                on their pastes, give them feedback, rate his pastes and more!
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center border border-blue-500/60 text-2xl items-center mb-4 w-10 h-10 rounded-md lg:h-12 lg:w-12">
                                🧑🏽‍💻
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white"> Open to contribute </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We are waiting for your contribution, you can contribute to the project
                                and make it better, we are open to new ideas and new features that you
                                can bring to the project
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center border border-blue-500/60 text-2xl items-center mb-4 w-10 h-10 rounded-md lg:h-12 lg:w-12">
                                🌩️
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white"> Fast </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We have a fast system that allows you to create pastes and share them
                                with other users in multi times, we are simply fast and we are always
                                looking for ways to improve our system
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    )
}