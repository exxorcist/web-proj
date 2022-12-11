import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="leftSide">
          <form className="loginContainerBox" onSubmit={handleClick}>
            <input
              placeholder="Enter Email"
              type="email"
              required
              className="inputBoxes"
              ref={email}
            />
            <input
              placeholder="Enter Password"
              type="password"
              required
              minLength="6"
              className="inputBoxes"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
        <div className="rightSide">
          <h3 className="logo">VeteranMeet</h3>
        </div>
      </div>
    </div>
  );
}
