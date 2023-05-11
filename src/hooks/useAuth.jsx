export const useAuth = ({ setUser }) => {
    const identifyUser = (dataMe) => {
        if (!dataMe) return
        const { id, username, email } = dataMe.me
        setUser({ id, username, email })
    }

    const signOut = () => {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        setUser({ id: '', username: '', email: '' })
    }

    return {
        identifyUser,
        signOut,
    }
}
