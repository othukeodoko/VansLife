import React from "react";
import { Link } from "react-router-dom"


export default function Navbar(){

    return(
        <>
        <nav className="global-nav">
            <div>
            <img src="../src/assets/Vanlifelogo.png" className="logo" />
            </div>
            <div>
            <ul className="navlinks">
                <Link className="global-nav-elements" to="/">Home</Link>
                <Link className="global-nav-elements" to="/About">About</Link>
                <Link className="global-nav-elements" to="/Vans">Vans</Link>
            </ul>
            </div>
        </nav>
        </>
    )
}