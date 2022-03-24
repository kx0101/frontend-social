import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import {useState} from "react"
import { useEffect } from "react";
import axios from "axios"

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/6231a6aaaac23ad444fdbe79");
      setPosts(res.data)
    }

    fetchPosts();
  }, []) //Render this useEffect once only.

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map( p=> (
          <Post key={p._id} post={p} />
        ))} 
      </div>
    </div>
  )
}
