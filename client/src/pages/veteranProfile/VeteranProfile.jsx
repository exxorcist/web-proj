import "./veteranProfile.css";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import FeedVet from "../../components/feedVet/FeedVet";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function VeteranProfile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Navbar />
      <div className="veteranProfile">
        <div className="leftProfile">
          <div className="topLeftProfile">
            <div className="coverOfProfile">
              <img
                className="coverOfProfileImg"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
              />
              <img
                className="imgProfile"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="infoProfile">
              <h4 className="infoProfileName">{user.username}</h4>
              <span className="infoProfileDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileBottomRight">
            <FeedVet username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
