import React from "react";

/**
 * The notification context object
 * @type {Object}
 */
const NotificationContext = React.createContext({
    notification: {
        // Whether or not to show the notification
        show: false,
        // The message to display
        message: "",
        // The type of notification
        type: "error" | "success" | "warning",
    },
    setNotification: () => {},
});

/**
 * Provider for the notification
 * @param {Object} children - The children of the provider
 * @returns {Object} - The provider
 */
const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = React.useState({
        show: false,
        message: "",
        type: "",
    });
    
    return (
        <NotificationContext.Provider value={{ notification, setNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

/**
 * Hook for using the notification context
 * @returns {Object} - The notification context
 */
const useNotificationContext = () => React.useContext(NotificationContext);

export { NotificationProvider, useNotificationContext };