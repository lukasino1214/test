import React from "react"
import { useState, useEffect } from "react"
import { supabase } from "../../client"
import { Post } from "../../components/widget/Post"

const container = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
};

function Byty() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({cena: "", rozloha: "", dispozice: "", text: "", lokace: ""})
  const { cena, rozloha, dispozice, text, lokace } = post
  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const {data} = await supabase.from("byty").select().order('created_at', { ascending: false })
    setPosts(data)
    console.log("data: ", data)
  }

  async function createPost() {
    await supabase.from("posts").insert([{rozloha, cena}]).single()
    setPost({cena: "", rozloha: "", dispozice: "", text: "", lokace: ""})
    fetchPosts()
  }

  return (
    <div className="Byty" /*style={mystyle}*/>
      <div style={container}>
        {
          posts.map(post => (
            <Post post={post} typ={"byt"}/>
          ))
        }
      </div>
    </div>
  );
}

export default Byty;