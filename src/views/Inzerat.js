import { useState, useEffect } from "react"
import { supabase } from "../client"

function Options(post, setPost) {
    if(post.typ == "byt") {
        return (
        <div>
            <label>Cena:</label><br></br>
            <input type="text" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} value={post.cena} onChange={e => setPost({...post, cena: e.target.value})}></input><br /><br />
            <label>Rozloha:</label><br></br>
            <input type="text" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} value={post.rozloha} onChange={e => setPost({...post, rozloha: e.target.value})}></input><br /><br />
            <label>Lokace:</label><br></br>
            <input type="text" value={post.lokace} onChange={e => setPost({...post, lokace: e.target.value})}></input><br /><br />
            <label>Dispozice:</label><br></br>
            <select onChange={e => setPost({...post, dispozice: e.target.value})}>
                <option value="1+kk">1+kk</option>
                <option value="2+kk">2+kk</option>
                <option value="3+kk">3+kk</option>
                <option value="4+kk">4+kk</option>
                <option value="5+kk">5+kk</option>
                <option value="ostatní">Ostatní</option>
            </select><br /><br />
            <label>Text:</label><br></br>
            <textarea type="text" value={post.text} onChange={e => setPost({...post, text: e.target.value})}></textarea><br /><br />

        </div>
        )
    }

    else if(post.typ =="dum") {
        return (
            <div>
                <label>Cena:</label><br></br>
                <input type="text" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} value={post.cena} onChange={e => setPost({...post, cena: e.target.value})} /><br /><br />
                <label>Rozloha pozemku:</label><br></br>
                <input type="text" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} value={post.rozloha} onChange={e => setPost({...post, rozloha: e.target.value})}></input><br /><br />
                <label>Rozloha obytné části:</label><br></br>
                <input type="text" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} value={post.dum} onChange={e => setPost({...post, dum: e.target.value})}></input><br /><br />
                <label>Druh majetku:</label><br></br>
                <select onChange={e => setPost({...post, druh: e.target.value})}>
                    <option value="rodinného domu">Rodinny</option>
                    <option value="vily">Vila</option>
                    <option value="chalupy">Chalupa</option>
                    <option value="chaty">Chata</option>
                    <option value="projektu na klíč">Na klic</option>
                    <option value="zemědělské usedlosti">Zemedelska usedlost</option>
                    <option value="památky">Pamatka/Jine</option>
                    <option value="vícegeneračního domu">Vicegeneracni dum</option>
                </select><br /><br />
                <label>Lokace:</label><br></br>
                <input type="text" value={post.lokace} onChange={e => setPost({...post, lokace: e.target.value})}></input><br /><br />
                <label>Dispozice:</label><br></br>
                <select onChange={e => setPost({...post, dispozice: e.target.value})}>
                    <option value="1 pokoj">1 pokoj</option>
                    <option value="2 pokoje">2 pokoje</option>
                    <option value="3 pokoje">3 pokoje</option>
                    <option value="4 pokoje">4 pokoje</option>
                    <option value="5 pokoju">5 pokoju</option>
                    <option value="ostatni">Ostatní</option>
                </select><br /><br />
                <label>Text:</label><br></br>
                <textarea type="text" value={post.text} onChange={e => setPost({...post, text: e.target.value})}></textarea><br /><br />
    
            </div>
            )
    }

    else if(post.typ =="projekt") {
        return (
            <div>
                <label>Nazev:</label><br></br>
                <input type="text" value={post.druh} onChange={e => setPost({...post, druh: e.target.value})}></input><br /><br />
                <label>Lokace:</label><br></br>
                <input type="text" value={post.lokace} onChange={e => setPost({...post, lokace: e.target.value})}></input><br /><br />
                <label>Text:</label><br></br>
                <textarea type="text" value={post.text} onChange={e => setPost({...post, text: e.target.value})}></textarea><br /><br />
    
            </div>
            )
    }

    else if(post.typ =="pozemek") {
        return (
            <div>
                <label>Cena:</label><br></br>
                <input type="text" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} value={post.cena} onChange={e => setPost({...post, cena: e.target.value})}></input><br /><br />
                <label>Rozloha pozemku:</label><br></br>
                <input type="text" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} value={post.rozloha} onChange={e => setPost({...post, rozloha: e.target.value})}></input><br /><br />
                <label>Lokace:</label><br></br>
                <input type="text" value={post.lokace} onChange={e => setPost({...post, lokace: e.target.value})}></input><br /><br />
                <label>Text:</label><br></br>
                <textarea type="text" value={post.text} onChange={e => setPost({...post, text: e.target.value})}></textarea><br /><br />
                <label>Druh:</label><br></br>
                <select onChange={e => setPost({...post, druh: e.target.value})}>
                    <option value="stavebního pozemku">bydleni</option>
                    <option value="komerčního pozemku">komercni</option>
                    <option value="pole">pole</option>
                    <option value="louky">louka</option>
                    <option value="lesa">les</option>
                    <option value="rybníku">rybnik</option>
                    <option value="sadu, vinice">sad/vinice</option>
                    <option value="zahrady">zahrada</option>
                    <option value="pozemku">Ostatní</option>
                </select><br /><br />
            </div>
            )
    }

    else if(post.typ =="komercni") {
        return (
            <div>
                <label>Cena:</label><br></br>
                <input type="text" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} value={post.cena} onChange={e => setPost({...post, cena: e.target.value})}></input><br /><br />
                <label>Rozloha:</label><br></br>
                <input type="text" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} value={post.rozloha} onChange={e => setPost({...post, rozloha: e.target.value})}></input><br /><br />
                <label>Lokace:</label><br></br>
                <input type="text" value={post.lokace} onChange={e => setPost({...post, lokace: e.target.value})}></input><br /><br />
                <label>Text:</label><br></br>
                <textarea type="text" value={post.text} onChange={e => setPost({...post, text: e.target.value})}></textarea><br /><br />
                <label>Druh:</label><br></br>
                <select onChange={e => setPost({...post, druh: e.target.value})}>
                    <option value="kanceláře">Kancelář</option>
                    <option value="skladového prostoru">Sklad</option>
                    <option value="výrobní haly">Výroba</option>
                    <option value="obchodního prostoru">Obchodní prostor</option>
                    <option value="ubytovacího zařízení">Ubytování</option>
                    <option value="restaurace">Restaurace</option>
                    <option value="zemědělského objektu">Zemědělský</option>
                    <option value="činžovního domu">Činžovní dům</option>
                    <option value="komerční nemovitosti">Ostatní</option>
                    <option value="ordinace">Ordinace</option>
                    <option value="apartmánu">Apartmány</option>
                </select><br /><br />
            </div>
            )
    }

    else if(post.typ =="ostatni") {
        return (
            <div>
                <label>Cena:</label><br></br>
                <input type="text" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} value={post.cena} onChange={e => setPost({...post, cena: e.target.value})}></input><br /><br />
                <label>Rozloha pozemku:</label><br></br>
                <input type="text" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} value={post.rozloha} onChange={e => setPost({...post, rozloha: e.target.value})}></input><br /><br />
                <label>Lokace:</label><br></br>
                <input type="text" value={post.lokace} onChange={e => setPost({...post, lokace: e.target.value})}></input><br /><br />
                <label>Text:</label><br></br>
                <textarea type="text" value={post.text} onChange={e => setPost({...post, text: e.target.value})}></textarea><br /><br />
                <label>Druh:</label><br></br>
                <select onChange={e => setPost({...post, druh: e.target.value})}>
                    <option value="garáže">Garáž</option>
                    <option value="garážového stání">Garážové stání</option>
                    <option value="mobilheimu">Mobilheim</option>
                    <option value="vinného sklepa">Vinný sklep</option>
                    <option value="půdního prostoru">Půdní prostor</option>
                    <option value="specifického typu nemovitosti">Ostatní</option>
                </select><br /><br />
            </div>
            )
    }
}


function Inzerat() {
    const [post, setPost] = useState({transakce: "", typ: "", cena: "", rozloha: "", dum: "", lokace: "", text: "", dispozice: "", druh: ""})
    const {transakce, typ, cena, rozloha, dum, lokace, text, dispozice, druh} = post

    async function createPost() {
        if(typ=="byt") {
            await supabase.from("byt").insert([{cena, rozloha, lokace, dispozice, text}]).single();
        } else if(typ == "dum") {
            await supabase.from("dum").insert([{cena, rozloha, dum, druh, lokace, dispozice, text}]).single();
        } else if(typ == "projekt") {
            await supabase.from("projekt").insert([{druh, lokace, text}]).single();
        } else if(typ == "pozemek") {
            await supabase.from("pozemek").insert([{cena, rozloha, lokace, text, druh}]).single();
        } else if(typ == "komercni") {
            await supabase.from("komercni").insert([{cena, rozloha, lokace, text, druh}]).single();
        } else if(typ == "ostatni") {
            await supabase.from("ostatni").insert([{cena, rozloha, lokace, text, druh}]).single();
        }
      }

  return (
    <div className="App">
      <h1>Inzerat</h1>
      <form>
      <label>Typ manjetku:</label><br></br>
      <select onChange={e => setPost({...post, typ: e.target.value})}>
          <option value="byt">Byt</option>
          <option value="dum">Dům</option>
          <option value="projekt">Projekt</option>
          <option value="pozemek">Pozemek</option>
          <option value="komercni">Komerční</option>
          <option value="ostatni">Ostatní</option>
      </select>

      {Options(post, setPost)}

      </form>
      <button onClick={createPost}>Create Post</button>
      <p>{post.cena}</p> 
      <p>{druh}</p>   

    
    </div>
);
}

//{Byt(typ, cena, setCena, lokace, setLokace, rozloha, setRozloha)}

export default Inzerat;