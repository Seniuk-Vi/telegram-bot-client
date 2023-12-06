// Logout.tsx or .jsx
import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import { useAuth } from '../../../utils/IAuthContext'; // Adjust the path to your AuthContext

const Logout: React.FC = () => {
    const { logout} = useAuth(); // Replace AuthContext with your authentication context provider
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate("/auth");
    });

    return <div>Logging out...</div>;
};

export default Logout;