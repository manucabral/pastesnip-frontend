import { useEffect } from 'react'
import { useUserContext } from '../context/UserContext'
import { useNotificationContext } from '../context/NotificationContext'
import { Q_PASTES } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import moment from 'moment'

export default function Profile() {
    const { user } = useUserContext()
    const { setNotification } = useNotificationContext()
    const { loading, error, data } = useQuery(Q_PASTES)
    useEffect(() => {
        document.title = `${user.username} - Pastesnip`
    }, [])

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center lg:w-1/2 w-3/4 gap-5 text-center">
                <h1 className="text-white text-3xl mt-10 font-bold">Profile</h1>
                <h2 className="text-white text-xl">
                    Welcome back,{' '}
                    <span className="text-slate-400">{user.username}</span> 👋
                </h2>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-1/2 w-full">
                <div className="flex flex-col items-center justify-center lg:w-1/2 w-full">
                    <h1 className="text-white text-3xl mt-10 font-bold">
                        Your Pastes
                    </h1>
                    <div className="flex flex-col items-center justify-center w-full text-center">
                        {loading && <p className="text-white">Loading...</p>}
                        {error && (
                            <p className="text-white text-lg">
                                {error.message} please verify your email.
                            </p>
                        )}
                        {data &&
                            data.pastes.map((paste) => (
                                <div
                                    onClick={() => {
                                        console.log(paste.id)
                                    }}
                                    key={paste.id}
                                    className="flex flex-col items-center justify-center lg:w-full w-full bg-gray-800 rounded-md mt-3 p-2 my-2 cursor-pointer hover:bg-gray-700"
                                >
                                    <div className="flex flex-row items-center justify-between w-full">
                                        <div className="flex flex-row items-center justify-start">
                                            <h2 className="text-white text-lg font-bold">
                                                {paste.title}
                                            </h2>
                                        </div>
                                        <div className="flex flex-row items-center justify-end">
                                            <p className="text-white text-sm">
                                                {moment
                                                    .unix(
                                                        parseInt(
                                                            paste.createdAt
                                                        ) / 1000
                                                    )
                                                    .format('DD/MM/YYYY')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
