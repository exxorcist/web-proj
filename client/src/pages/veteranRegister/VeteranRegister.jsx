import axios from "axios";
import { useRef } from "react";
import "./veteranRegister.css";
import { useHistory } from "react-router";

export default function VeteranRegister() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const isAdmin = useRef();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(isAdmin);
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        isAdmin: isAdmin.current.value,
      };
      try {
        await axios.post("/auth/veteranRegister", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div>
        <div className="login">
          <div className="loginContainer">
            <div className="leftSide">
              <form className="loginContainerBox" onSubmit={handleClick}>
                <input
                  placeholder="Enter Username"
                  required
                  ref={username}
                  className="inputBoxes"
                />
                <input
                  placeholder="Enter Email"
                  required
                  ref={email}
                  className="inputBoxes"
                  type="email"
                />
                <input
                  placeholder="Enter Password"
                  required
                  ref={password}
                  className="inputBoxes"
                  type="password"
                  minLength="6"
                />
                <input
                  placeholder="Enter Password Again"
                  required
                  ref={passwordAgain}
                  className="inputBoxes"
                  type="password"
                />
                <div className="box">
                  Sign Up as Organization
                  <label class="switch">
                    <input type="checkbox" ref={isAdmin} />
                    <span class="slider round"></span>
                  </label>
                </div>
                <button className="loginButton" type="submit">
                  Sign Up
                </button>
                <button className="loginRegisterButton">
                  Log into Account
                </button>
              </form>
            </div>
            <div className="rightSide">
              <h3 className="logo">VeteranMeet</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
