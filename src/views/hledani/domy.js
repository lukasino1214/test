import React from "react"
import { useState, useEffect } from "react"
import { supabase } from "../../client"
import { Post } from "../../components/widget/Post"

const container = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
};

function Domy() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({cena:"", rozloha:"", dum:"", druh:"", lokace:"", dispozice:"", text:""})
  const { cena, rozloha, dum, druh, lokace, dispozice, text} = post
  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const {data} = await supabase.from("dum").select().order('created_at', { ascending: false })
    setPosts(data)
    console.log("data: ", data)
  }

  /*async function createPost() {
    await supabase.from("posts").insert([{rozloha, cena}]).single()
    setPost({cena: "", pozemek: "", typ: "", text: "", lokace: "", dum:""})
    fetchPosts()
  }*/

  return (
    <div className="Domy" /*style={mystyle}*/>
      <div style={container}>
        {
          posts.map(post => (
            <Post post={post} typ={"dum"} />
            //<DomyComponent id={post.id} typ={post.druh} cena={post.cena} pozemek={post.pozemek} dum={post.dum} text={post.text} lokace={post.lokace} />
          ))
        }
      </div>
    </div>
  );
}

export default Domy;