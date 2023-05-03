import { Outlet } from "react-router-dom"
import { useNotificationContext } from "../context/NotificationContext"
import { useUserContext } from "../context/UserContext"

import Navbar from "./Navbar"
import Footer from "./Footer"
import Notification from "./Notification"
import { useEffect } from "react"

export default function Layout() {
    const { notification, setNotification } = useNotificationContext();
    const { user } = useUserContext();

    useEffect(() => {
        if (localStorage.getItem('access') !== null)
            setNotification({ show: true, message: `You are logged in as test.`, type: "success" });
        else
            setNotification({ show: true, message: "You are not logged in.", type: "warning" });
    }, [user]);

    return (
        <div className="min-h-screen bg-slate-900 text-white items-center w-full">
            <Navbar />
            <div className="flex flex-col items-center justify-center w-full">
                {notification.show === true && <Notification message={notification.message} type={notification.type} />}
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}