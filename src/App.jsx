import { useQuery } from '@apollo/client'
import { Q_HELLO, Q_ME } from './graphql/queries'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Maintenance from './pages/Maintenance'
import Loading from './components/Loading'
import Profile from './pages/Profile'
import ProfileById from './pages/ProfileById'
import NewPaste from './pages/NewPaste'

import { useEffect } from 'react'
import { useUserContext } from './context/UserContext'
import { useAuth } from './hooks/useAuth'
// deprecated for now.
import RequireAuth from './components/RequireAuth'

export default function App() {
    const navigate = useNavigate()
    const { setUser } = useUserContext()
    const { identifyUser } = useAuth({ setUser })

    const { loading: loadingHello, error } = useQuery(Q_HELLO)
    const { loading: loadingMe, data: dataMe } = useQuery(Q_ME)

    useEffect(() => {
        identifyUser(dataMe)
    }, [dataMe])

    if (loadingHello)
        return <Loading additional={'Checking server status...'} />
    if (loadingMe) return <Loading additional={'Checking user status...'} />
    if (error) navigate('/maintenance')

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:id" element={<ProfileById />} />
                <Route path="/newpaste" element={<NewPaste />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
