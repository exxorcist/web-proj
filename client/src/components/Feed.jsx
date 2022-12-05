import {useEffect, useState} from "react"
import "../ComponentStyles/Feed.css"
import Share from './Share'
import Post from './Post'
import axios from "axios"

export default function Feed({username}) {
  const [posts, setPosts] = useState([])


  useEffect(()=>{
    const fetchPosts=async ()=>{
      const res = username
      ? await axios.get("/posts/profile/" + username)
      : await axios.get("posts/timeline/605b3d777a3cf74918165c05");
      setPosts(res.data);
    };
    fetchPosts()
  },[username])

  return (
    <div className='feed'>

      <div className="feedWrapper">

        <Share/>
        {posts.map((p)=>(
          
          <Post key={p._id} post={p}/>
        ))}

      </div>
    </div>
  )
}
