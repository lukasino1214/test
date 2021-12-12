import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

const test = {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none"
};

const ul =  {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "#333",
    textDecoration: "none"
};

function Nav() {
    return (
        <nav className="wow">
            <ul className="wow">
            <Link style={{ float: "left"}} to="/">
                    <li style={test}>LOGO</li>
                </Link>
                <Link style={{ float: "right"}} to="/about">
                    <li style={test}>Přihlášení</li>
                </Link>
                <Link style={{ float: "right"}} to="/shop">
                    <li style={test}>Zpravy</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;