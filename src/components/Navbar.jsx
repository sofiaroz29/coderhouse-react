
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png"
import "../NavbarStyles.css"
import { Link, NavLink } from "react-router";
function Navbar (){
    return (
        <nav className="navbar">
            <Link to="/" className = "navbar-logo">
                <img src={logo} width="200" height="40" alt="Logo" />
            </Link>
            
            <div>
                <ul id = "navbar-menu">
                    <li><NavLink to = {"/category/remeras-y-tops"}>REMERAS Y TOPS</NavLink></li>
                    <li><NavLink to = {"/category/pantalones"}>PANTALONES</NavLink></li>
                    <li><NavLink to = {"/category/vestidos"}>VESTIDOS</NavLink></li>
                    <li><NavLink to = {"/category/accesorios"}>ACCESORIOS</NavLink></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
        
    );
    
}

export default Navbar;