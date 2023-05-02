import { useQuery } from '@apollo/client'
import { Q_HELLO, Q_ME } from './graphql/queries'
import { Routes, Route, useNavigate } from "react-router-dom";

import Layout from './components/Layout'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Maintenance from './pages/Maintenance';
import Loading from './components/Loading';
import { useAuth } from './hooks/useAuth';
import { useEffect } from 'react';
import { useUserContext } from './context/UserContext';
import { useNotificationContext } from './context/NotificationContext';

export default function App() {
    const navigate = useNavigate();
    const { setUser } = useUserContext();
    const { notification, setNotification } = useNotificationContext();
    const { loading, error } = useQuery(Q_HELLO);
    const queryMe = useQuery(Q_ME);

    const { identifyUser } = useAuth({ notification, setNotification, queryMe, setUser });

    useEffect(() => {
        identifyUser();
    }, []);
    if (loading) return <Loading />;
    if (error) navigate("/maintenance");

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
