import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCallback, useState } from "react";
// import UserApiService from "../../services/user-api-service";

// this npm library can be deleted
import jwt_decode from "jwt-decode";
import "./Login.css";

export default function Login({
  profile,
  fetchProfileAction,
  updateProfileAction,
  updatePageButtonAction,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("profile", profile);
    if (profile && profile.id) {
      updatePageButtonAction("quiz");
      navigate("/quiz");
      return;
    }
  }, [navigate, profile]);

  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");

  function parseJwt(token) {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  }

  useEffect(() => {
    if (profile && profile.email && !profile.id) {
      console.log("updateProfileActions");
      console.log("email", email, "picture", picture, "name", name);
      updateProfileAction({
        ...profile,
        email: email,
        picture: picture,
        userName: name,
        //   email: email,
        //   userName: name,
        //   age: null,
        //   phone: null,
        //   location: null,
        //   picture: picture,
        //   gender: "choose",
        //   preferences: {
        //     relation_type: "friends",
        //     gender: "any",
        //     minAge: 25,
        //     maxAge: 55,
        // },
      });
      console.log("UserApiService.setTriviaStatistics(email)");
      //      UserApiService.setTriviaStatistics(email);
    }
  });

  const getGoogleLoginData = useCallback(
    async (credentialResponse) => {
      const { email, picture, name } = jwt_decode(credentialResponse.credential);
      setEmail(email);
      setPicture(picture);
      setName(name);
      await fetchProfileAction(email);
    },
    [fetchProfileAction]
  );

  const googleLogIn = (
    <GoogleLogin
      onSuccess={(credentialResponse) => getGoogleLoginData(credentialResponse)}
      onError={() => {
        console.log("Google login failed");
      }}
    />
  );

  const [testEmail, setTestEmail] = useState("");
  const [pass, setPass] = useState("");

  const getTesterLoginData = useCallback(
    async (event) => {
      event.preventDefault();
      const testUserEmail = testEmail;
      const secretPass = pass;
      if (secretPass !== process.env.REACT_APP_TESTING_PASSWORD) {
        console.log("Invalid password");
        setPass("");
      } else {
        setTestEmail("");
        await fetchProfileAction(testUserEmail);
      }
    },
    [testEmail, pass, fetchProfileAction]
  );

  const testerLogin = (
    <form className="test-form" onSubmit={(e) => getTesterLoginData(e)}>
      User email
      <label>
        <input
          type="text"
          name="email"
          value={testEmail}
          onChange={(e) => setTestEmail(e.target.value)}
        />
      </label>
      Password
      <label>
        <input
          type="password"
          name="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Log in" />
    </form>
  );
  let loginOptions;

  loginOptions = (
    <div>
      <h1>Login with google</h1>
     {/*  {googleLogIn} */}
      <br />
      <br />
      <br />
      <div className="test-login-container">
        <p>Test Login</p>
        {testerLogin}
      </div>
    </div>
  );

  return (
    <div className="login-container">
      <h1>Welcome to Quizy Smart Dating</h1>
      <p>Find your brainmate according to your interests and knowledge</p>
      <img src="/favicon.png" width="200px" alt="heart" />
      {loginOptions}
    </div>
  );
}
