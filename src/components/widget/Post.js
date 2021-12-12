import { post, setPost, transakce, typ, cena, rozloha, dum, lokace, text, dispozice, druh } from "../utils/style"
import { image, mystyle } from "../utils/style"
import { numberWithSpaces } from "../utils/utils"

export function Post(props) {
    const post = props.post;
    if(props.typ == "byt") {
        return (
            <div style={mystyle} key={post.id}>
            <div style={image}>
                <h1>No image</h1>
            </div>
            <h1>Prodej bytu {post.dispozice} {numberWithSpaces(post.rozloha)} m²</h1>
            <h3>{post.lokace}</h3>
            <h2>{numberWithSpaces(post.cena)} Kč</h2>
        </div>
        );

    } else if(props.typ == "dum") {
        return (
            <div style={mystyle} key={post.id}>
            <div style={image}>
                <h1>No image</h1>
            </div>
            <h1>Prodej {post.druh} {numberWithSpaces(post.dum)} m², pozemek {numberWithSpaces(post.pozemek)} m²</h1>
            <h3>{post.lokace}</h3>
            <h2>{numberWithSpaces(post.cena)} Kč</h2>
        </div>
        );

    } else if(props.typ == "projekt") {
        return (
            <div style={mystyle} key={post.id}>
            <div style={image}>
                <h1>No image</h1>
            </div>
            <h1>Prodej {post.druh}</h1>
            <h3>{post.lokace}</h3>
            <h3>{post.text}</h3>
        </div>
        );

    } else if(props.typ == "pozemek") {
        return (
            <div style={mystyle} key={post.id}>
            <div style={image}>
                <h1>No image</h1>
            </div>
            <h1>Prodej {post.druh} {numberWithSpaces(post.rozloha)} m²</h1>
            <h3>{post.lokace}</h3>
    
        </div>
        );

    } else if(props.typ == "komercni") {
        return ( 
            <div style={mystyle} key={post.id}>
                <div style={image}>
                    <h1>No image</h1>
                </div>
                <h1>Prodej {post.druh} {numberWithSpaces(post.rozloha)} m²</h1>
                <h3>{post.lokace}</h3>
                <h2>{numberWithSpaces(post.cena)} Kč</h2>
            </div>
        );

    } else if(props.typ == "ostatni") {
        return (
            <div style={mystyle} key={post.id}>
            <div style={image}>
                <h1>No image</h1>
            </div>
            <h1>Prodej {post.druh} {numberWithSpaces(post.rozloha)} m²</h1>
            <h3>{post.lokace}</h3>
            <h2>{numberWithSpaces(post.cena)} Kč</h2>
        </div>
        )

    } else {
        return (<p>Chyba špatný typ!</p>);
    }
}