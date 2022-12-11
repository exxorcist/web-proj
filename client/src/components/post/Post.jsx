import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postContainer">
          <div className="topLeftPost">
            <Link to={`/veteranProfile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
        <div className="centerOfPost">
          <span className="textOfPost">{post?.desc}</span>
          <img className="imgOfPost" src={PF + post.img} alt="" />
        </div>
        <div className="bottomOfPost">
          
          <div className="bottomOfPostRight">
          </div>

          <div className="bottomOfPostLeft">
            <img
              className="iconOfLike"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="iconOfLike"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="likesOnPost">{like} people liked the post</span>
          </div>
        </div>
      </div>
    </div>
  );
}
