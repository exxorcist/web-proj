import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import SharePost from "../sharePost/SharePost";
import "./feedVet.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function FeedVet({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/veteranProfile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feedVet">
      <div className="feedVetWrapper">
        {(!username || username === user.username) && <SharePost />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
