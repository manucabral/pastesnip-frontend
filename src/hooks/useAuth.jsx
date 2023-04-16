export const useAuth = ({ notification, setNotification, setUser, queryMe }) => {

    const identifyUser = async () => {
        try {
            const response = await meQuery();
            const { id, username, email } = response.data.me;
            setUser({ id, username, email });
        } catch (err) {
            setUser({ id: "", username: "", email: "" });
        }
    }

    return {
        identifyUser
    }
}
