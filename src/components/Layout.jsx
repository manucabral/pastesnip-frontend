import { Outlet } from "react-router-dom"
import { useNotificationContext } from "../context/NotificationContext"

import Navbar from "./Navbar"
import Footer from "./Footer"
import Notification from "./Notification"

export default function Layout() {
    const { notification } = useNotificationContext();
    return (
        <div className="min-h-screen bg-slate-900 text-white items-center">
            <Navbar />
            {notification.show === true && <Notification message={notification.message} type={notification.type} />}
            <Outlet />
            <Footer />
        </div>
    )
}