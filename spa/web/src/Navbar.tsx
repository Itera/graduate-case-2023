import { NavLink } from "react-router-dom";
import "./navbar.css";
import ExplorerLogo from "./assets/ExploreLogo.svg"
import Persona from "./assets/Persona.png"

function Navbar() {
    return(
        <nav className="Navbar-container">
            <NavLink to="/"><img src={ExplorerLogo} alt="Explorer Logo"/></NavLink>
            <NavLink  to="/" className="Navbar-title">
                SPA
            </NavLink>
            <NavLink to="/"><img src={Persona} alt="Profile Picture" width={50}/></NavLink>
        </nav>
    )
}

export default Navbar;