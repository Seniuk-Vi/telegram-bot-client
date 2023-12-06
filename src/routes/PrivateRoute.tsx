import { Navigate } from 'react-router-dom'
import {useAuth} from "../utils/IAuthContext";

interface Props {
    component: React.ComponentType
    path?: string
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <RouteComponent />
    }

    return <Navigate to="/auth" />
}