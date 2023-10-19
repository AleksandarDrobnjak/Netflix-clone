import React, { useRef } from "react";
import "./SingupScreen.css";
import { auth } from "../firebase";

function SingupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="singupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Wmail" type="email"></input>
        <input ref={passwordRef} placeholder="Password" type="password"></input>
        <button type="submit" onClick={signIn}>
          Sing In
        </button>
        <h4>
          <span className="singupScreen__gray"> New to Netflix? </span>
          <span className="singupScreen__link" onClick={register}>
            Sing Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SingupScreen;
