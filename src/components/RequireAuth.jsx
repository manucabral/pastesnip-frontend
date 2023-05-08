import { Navigate, useLocation } from 'react-router-dom'

export default function RequireAuth({ children, userPayload }) {
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/' } }
    if (!userPayload) return <Navigate to="/signin" state={{ from }} />
    return children
}
