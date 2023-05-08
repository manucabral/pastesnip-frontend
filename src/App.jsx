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
import NewPaste from './pages/NewPaste'

import { useEffect } from 'react'
import { useUserContext } from './context/UserContext'
import { useNotificationContext } from './context/NotificationContext'
import { useAuth } from './hooks/useAuth'
import RequireAuth from './components/RequireAuth'

export default function App() {
    const navigate = useNavigate()
    const { setUser } = useUserContext()
    const { setNotification } = useNotificationContext()
    const { loading: loadingHello, error } = useQuery(Q_HELLO)
    const { loading: loadingMe, data: dataMe } = useQuery(Q_ME)
    const { identifyUser } = useAuth({ setNotification, setUser })

    useEffect(() => {
        identifyUser(dataMe)
    }, [dataMe])

    if (loadingHello) return <Loading />
    if (loadingMe) return <Loading />
    if (error) navigate('/maintenance')

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                    path="/profile"
                    element={
                        <RequireAuth userPayload={dataMe}>
                            <Profile />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/newpaste"
                    element={
                        <RequireAuth userPayload={dataMe}>
                            <NewPaste />
                        </RequireAuth>
                    }
                />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
