import React from "react"
import { useState, useEffect } from "react"
import { supabase } from "../../client"
import { Post } from "../../components/widget/Post"

const container = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
};

function Pozemky() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({cena: "", rozloha: "", dispozice: "", text: "", lokace: ""})
  const { cena, rozloha, druh, text, lokace } = post
  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const {data} = await supabase.from("pozemek").select().order('created_at', { ascending: false })
    setPosts(data)
    console.log("data: ", data)
  }

  async function createPost() {
    await supabase.from("posts").insert([{rozloha, cena}]).single()
    setPost({cena: "", rozloha: "", info: "", text: "", lokace: ""})
    fetchPosts()
  }

  return (
    <div className="Pozemky" /*style={mystyle}*/>
      <div style={container}>
        {
          posts.map(post => (
            //<PozemkyComponent id={post.id} typ={post.typ} cena={post.cena} rozloha={post.rozloha} text={post.text} lokace={post.lokace} />
            <Post post={post} typ={"pozemek"} />
          ))
        }
      </div>
    </div>
  );
}

export default Pozemky;