export function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/*export async function fetchPosts() {
    const {data} = await supabase.from("byty").select().order('created_at', { ascending: false })
    setPosts(data)
    console.log("data: ", data)
  }

export async function createPost() {
    await supabase.from("posts").insert([{rozloha, cena}]).single()
    setPost({cena: "", rozloha: "", dispozice: "", text: "", lokace: ""})
    fetchPosts()
  }*/