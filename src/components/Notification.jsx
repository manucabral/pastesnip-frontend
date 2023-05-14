import { useNotificationContext } from '../context/NotificationContext'

export default function Notification({ message, type }) {
    const { setNotification } = useNotificationContext()
    const getBgColor = () => {
        const className = {
            error: 'bg-red-600',
            warning: 'bg-yellow-600',
            success: 'bg-green-600',
        }
        return className[type]
    }
    const toCapitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
    const closeNotification = () => {
        setNotification({
            show: false,
            message: '',
            type: '',
        })
    }
    return (
        <div
            className={`flex flex-col items-center justify-center w-full lg:w-1/2 p-5 rounded-md ${getBgColor()}`}
        >
            <div className="header flex items-center justify-between w-full">
                <div className="flex items-center justify-center w-full">
                    <h1 className="text-xl font-bold">{toCapitalize(type)}</h1>
                </div>
                <button
                    className="bg-transparent text-white hover:bg-white hover:text-black rounded-full p-1"
                    onClick={closeNotification}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <p className="text-lg">{message}</p>
        </div>
    )
}
