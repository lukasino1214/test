import React from "react"
import { numberWithSpaces } from "./utils/utils"

const mystyle = {
  borderRadius: "25px",
  border: "2px solid white",
  boxShadow: "5px 10px 18px #222222",
  width: "auto",
  height: "auto",
  color: "black",
  backgroundColor: "#FFFFFFF",
  padding: "10px",
  fontFamily: "Arial",
  margin: "24px"
};

const image = {
    backgroundColor: "#AAAAAA",
    color: "black",
    width: "100%",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25px"
}

export function Post(props) {
    return ( 
        <div style={mystyle} key={props.id}>
            <div style={image}>
                <h1>No image</h1>
            </div>
            <h1>Prodej bytu {props.dispozice} {numberWithSpaces(props.rozloha)} m²</h1>
            <h3>{props.lokace}</h3>
            <h2>{numberWithSpaces(props.cena)} Kč</h2>
        </div>
    );
}
  