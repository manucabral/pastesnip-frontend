import { Outlet } from "react-router-dom"
import { useNotificationContext } from "../context/NotificationContext"

import Navbar from "./Navbar"
import Notification from "./Notification"

export default function Layout() {
    const { notification } = useNotificationContext();
    return (
        <div className="flex flex-col min-h-screen bg-slate-900 text-white items-center">
            <Navbar />
            {notification.show === true && <Notification message={notification.message} type={notification.type} />}
            <Outlet />
        </div>
    )
}