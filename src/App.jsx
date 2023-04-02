import Navbar from './components/Navbar'
import { useQuery } from '@apollo/client'
import { Q_HELLO } from './graphql/queries'

export default function App() {
    const { loading, error } = useQuery(Q_HELLO);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>An internal error has occurred. Please try again later.</p>;
    return (
        <div className="flex flex-col w-full h-screen bg-slate-900">
            <Navbar />
        </div>
    )
}
