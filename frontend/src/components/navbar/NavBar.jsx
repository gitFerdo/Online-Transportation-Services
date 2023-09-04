import "./navbar.css"
import { Link } from "react-router-dom"

const NavBar = () =>
{
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/transport" style={ { color: "inherit", textDecoration: "none" } }>
                    <span className="logo">Sky Sail</span>
                </Link>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;