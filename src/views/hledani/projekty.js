import React from "react"
import { useState, useEffect } from "react"
import { supabase } from "../../client"
import { Post } from "../../components/widget/Post"

const container = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
};

function Projekty() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({cena: "", rozloha: "", dispozice: "", text: "", lokace: ""})
  const { cena, druh, text, lokace } = post
  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const {data} = await supabase.from("projekty").select().order('created_at', { ascending: false })
    setPosts(data)
    console.log("data: ", data)
  }

  return (
    <div className="Projekty" /*style={mystyle}*/>
      <div style={container}>
        {
          posts.map(post => (
            <Post post={post} typ={"projekt"} />
            //<ProjektyComponent id={post.id} nazev={post.nazev} cena={post.cena} info={post.info} text={post.text} lokace={post.lokace} />
          ))
        }
      </div>
    </div>
  );
}

export default Projekty;