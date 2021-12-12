import React from "react"
import { useState, useEffect } from "react"
import { supabase } from "../../client"
import { Post } from "../../components/widget/Post"

const container = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
};

function Ostatni() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({cena: "", obsah: "", typ: "", text: "", lokace: ""})
  const { cena, obsah, druh, text, lokace } = post
  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const {data} = await supabase.from("ostatni").select().order('created_at', { ascending: false })
    setPosts(data)
    console.log("data: ", data)
  }

  return (
    <div className="Ostatni" /*style={mystyle}*/>
      <div style={container}>
        {
          posts.map(post => (
            //<OstatniComponent id={post.id} typ={post.typ} cena={post.cena} text={post.text} lokace={post.lokace} rozloha={post.rozloha} />
            <Post post={post} typ={"ostatni"} />
            ))
        }
      </div>
    </div>
  );
}

export default Ostatni;