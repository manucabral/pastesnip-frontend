import Navbar from './components/Navbar'
import { useQuery } from '@apollo/client'
import { Q_HELLO } from './graphql/queries'
import { Routes, Route, useNavigate } from "react-router-dom";

import Layout from './components/Layout'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import Maintenance from './pages/Maintenance';

export default function App() {
    const navigate = useNavigate();
    const { loading, error } = useQuery(Q_HELLO);

    if (loading) return <p>Loading...</p>;
    if (error) navigate("/maintenance");
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<h1 className="text-white">Sign Up</h1>} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
