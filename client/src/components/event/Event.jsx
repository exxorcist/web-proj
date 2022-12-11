import "./event.css";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Event({ event }) {
  const [like, setLike] = useState(event.participants.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(event.participants.includes(currentUser._id));
  }, [currentUser._id, event.participants]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${event.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [event.userId]);

  const likeHandler = () => {
    try {
      axios.put("/events/" + event._id + "/participate", {
        userId: currentUser._id,
      });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
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
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(event.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{event?.desc}</span>
          <img className="postImg" src={PF + event.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}star.png`} alt="" />
            <span className="postBottomLeft">{event?.stars}</span>
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">
              {like} people are taking part in this event
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{event.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
