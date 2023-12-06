import {NavLink} from "react-router-dom";
import './css/NavigationComponent.css';
import {useAuth} from "../../utils/IAuthContext";

const NavigationComponent = () => {
    const {isAuthenticated} = useAuth();
    return (
        <nav className={"nav-main"}>
            {/*<NavLink to="/">Home</NavLink>*/}
            {isAuthenticated ?
                <NavLink to="/logout">Logout</NavLink> :
                <NavLink to="/auth">Auth</NavLink>
            }

        </nav>
    );
}

export default NavigationComponent;