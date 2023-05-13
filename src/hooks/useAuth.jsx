export const useAuth = ({ setUser }) => {
    const identifyUser = (data) => {
        if (!data) return
        const { id, username, email, createdAt, verified } = data.me
        console.log(data.me)
        setUser({
            id,
            username,
            email,
            verified,
            createdAt,
        })
    }

    const signOut = () => {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        setUser({
            id: '',
            username: '',
            email: '',
            verified: false,
            createdAt: '',
        })
    }

    return {
        identifyUser,
        signOut,
    }
}
