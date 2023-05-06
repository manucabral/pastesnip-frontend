import { useUserContext } from "../context/UserContext"

export default function Profile() {
    const { user } = useUserContext();
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center lg:w-1/2 w-3/4 gap-5 text-center">
                <h1 className="text-white text-3xl mt-10 font-bold">Profile</h1>
                <h2 className="text-white text-xl">Welcome back, <span className="text-slate-400">{user.username}</span>!</h2>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-1/2 w-full">
                <div className="flex flex-col items-center justify-center lg:w-1/2 w-full">
                    <h1 className="text-white text-3xl mt-10 font-bold">Your Pastes</h1>
                    <h2 className="text-white text-xl">You have no pastes.</h2>
                </div>
            </div>
        </div>
    )
}