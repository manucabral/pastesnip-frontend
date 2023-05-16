import { useParams } from 'react-router-dom'
import { Q_GET_USER_BY_ID } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import { useUserContext } from '../context/UserContext'
import Profile from './Profile'
import Loading from '../components/Loading'

export default function ProfileById() {
    const { user } = useUserContext()
    const { id } = useParams()
    const { loading, error, data } = useQuery(Q_GET_USER_BY_ID, {
        variables: { id },
    })
    if (id === user.id) return <Profile />
    if (loading) return <Loading additional={'Loading user data...'} />
    if (data === undefined)
        return <h2 className="text-2xl font-bold">User not found.</h2>
    if (error) return <h2 className="text-2xl font-bold">Internal error.</h2>
    return (
        <section className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl font-bold">Profile</h1>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h2 className="text-2xl font-bold">Username</h2>
                    <p className="text-xl">{data.getUserById.username}</p>
                </div>
            </div>
        </section>
    )
}
