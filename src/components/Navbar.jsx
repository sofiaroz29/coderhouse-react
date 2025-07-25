
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png"
import "../NavbarStyles.css"
import { Link } from "react-router";
function Navbar (){
    return (
        <nav className="navbar">
            <div>
                <img src = {logo} width="200" height="40"></img>
            </div>
            
            <div>
                <ul id = "navbar-menu">
                    <li><Link to = {"/category/remeras-y-tops"}>REMERAS Y TOPS</Link></li>
                    <li><Link to = {"/category/pantalones"}>PANTALONES</Link></li>
                    <li><Link to = {"/category/vestidos"}>VESTIDOS</Link></li>
                    <li><Link to = {"/category/accesorios"}>ACCESORIOS</Link></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
        
    );
    
}

export default Navbar;