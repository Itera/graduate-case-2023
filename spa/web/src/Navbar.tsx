import { NavLink } from "react-router-dom";
import "./navbar.css";
import ExplorerLogo from "./assets/ExploreLogo.svg"
function Navbar() {
    return(
        <nav className="Navbar-container">
            <NavLink to="/"><img src={ExplorerLogo} alt="Explorer Logo"/></NavLink>
            <NavLink  to="/" className="Navbar-title">
                SPA
            </NavLink>
        </nav>
    )
}

export default Navbar;