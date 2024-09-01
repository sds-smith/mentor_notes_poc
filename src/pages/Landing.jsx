
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'

export default function Landing() {
    const { currentUser } = useAuthContext();

    const resolvedRouteByAuth = {
        true: `/${currentUser?.role}`,
        false: '/login'
    }

    return <Navigate to={resolvedRouteByAuth[Boolean(currentUser)]} />
}
