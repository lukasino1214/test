import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}

const button = {
    width: "120px",
    height: "70px",
    display: "block",
    color: "black",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    verticalAlign: "middle",
    justifyContent: "center",
    textDecoration: "none",
    float: "left"
};

const text = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

export function Menu() {
    return ( 
        <nav style={container}>
            <ul>
                <Link to="/hledani/byty" style={button}><li style={text}><p>Byty</p></li></Link>
                <Link to="/hledani/domy" style={button}><li style={text}><p>Domy</p></li></Link>
                <Link to="/hledani/projekty" style={button}><li style={text}><p>Projekty</p></li></Link>
            </ul>
            <ul>
                <Link to="/hledani/pozemky" style={button}><li style={text}><p>Pozemky</p></li></Link>
                <Link to="/hledani/komercni" style={button}><li style={text}><p>Komercni</p></li></Link>
                <Link to="/hledani/ostatni" style={button}><li style={text}><p>Ostatni</p></li></Link>
            </ul>
        </nav>
    )
}
  