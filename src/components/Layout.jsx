import { Outlet } from "react-router-dom"
import { useNotificationContext } from "../context/NotificationContext"
import Navbar from "./Navbar"
import Notification from "./Notification"

export default function Layout() {
    const { notification } = useNotificationContext();

    return (
        <div className="min-h-screen bg-slate-900 text-white items-center w-full">
            <Navbar />
            <div className="flex flex-col items-center justify-center w-full">
                {notification.show === true && <Notification message={notification.message} type={notification.type} />}
            </div>
            <Outlet />
        </div>
    )
}