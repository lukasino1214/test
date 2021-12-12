import React from "react"
import { useState, useEffect } from "react"
import { supabase } from "../../client"
import { Post } from "../../components/widget/Post"

const container = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
};

function Komercni() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({cena: "", rozloha: "", typ: "", text: "", lokace: ""})
  const { cena, rozloha, druh, text, lokace } = post
  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const {data} = await supabase.from("komercni").select().order('created_at', { ascending: false })
    setPosts(data)
    console.log("data: ", data)
  }

  return (
    <div className="Komercni" /*style={mystyle}*/>
      <div style={container}>
        {
          posts.map(post => (
            <Post post={post} typ={"komercni"}/>
            //<KomercniComponent id={post.id} typ={post.typ} cena={post.cena} rozloha={post.rozloha} text={post.text} lokace={post.lokace} />
          ))
        }
      </div>
    </div>
  );
}

export default Komercni;