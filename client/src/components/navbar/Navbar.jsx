import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="containerNavbar">
      

      <div className="leftNavbar">
        <div className="iconsNavbar">
          <Link to={`/veteranProfile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
              className="imgNavbar"
            />
          </Link>
          <div className="icons-container">
          </div>
        </div>
        <div className="centerNavbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">VeteranMeet</span>
        </Link>
        </div>
      </div>
      <div className="rightNavbar">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search VeteranMeet"
            className="inputSearch"
          />
        </div>
      </div>
    </div>
  );
}
