import "./sharePost.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function SharePost() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="sharePost">
      <div className="sharePostWrapper">
        <div className="sharePostTop">
          <input className="inputClass"
            placeholder={"                                                                                             What's on your mind " + user.username  + "?"}
            className="sharePostInput"
            ref={desc}
          />
          <img
            className="sharePostProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
        </div>
        <hr className="sharePostHr" />
        {file && (
          <div className="sharePostImgContainer">
            <img className="sharePostImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="sharePostCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="sharePostBottom" onSubmit={submitHandler}>
          <div className="sharePostOptions">
            <label htmlFor="file" className="sharePostOption">
              <PermMedia htmlColor="tomato" className="sharePostIcon" />
              <span className="sharePostOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <button className="sharePostButton" type="submit">
            SharePost
          </button>
        </form>
      </div>
    </div>
  );
}
