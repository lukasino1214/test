import './App.css';
import { useState, useEffect } from "react"
import { supabase } from "./client"
//import { Post } from "./components/Post"
import { Menu } from "./components/Menu"

const mystyle = {
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const container = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
};

function Bruh() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({title:"", content: ""})
  const { title, content } = post
  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const {data} = await supabase.from("posts").select().order('created_at', { ascending: false })
    setPosts(data)
    console.log("data: ", data)
  }

  async function createPost() {
    await supabase.from("posts").insert([{title, content}]).single()
    setPost({title:"", content: ""})
    fetchPosts()
  }

  return (
    <div className="App" /*style={mystyle}*/>
      <input placeholder="Title" value={title} onChange={e => setPost({...post, title: e.target.value})}></input>
      <input placeholder="Content" value={content} onChange={e => setPost({...post, content: e.target.value})}></input>
      <button onClick={createPost}>Create Post</button>
      <div style={container}>
        <p>{post.title}</p>
      </div>
    </div>
  );
}

export default Bruh;
