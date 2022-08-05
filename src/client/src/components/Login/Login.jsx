import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCallback, useState } from "react";

import jwt_decode from "jwt-decode";
import "./Login.css";

export default function Login({
  profile,
  fetchProfileAction,
  updateProfileAction,
  updatePageButtonAction,
  fetchAchievementsAction,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (profile && profile.id) {
      const navigateToPage = profile.location ? "quiz" : "profile";
      updatePageButtonAction(navigateToPage);
      navigate(`/${navigateToPage}`);
      return;
    }
  }, [navigate, profile, updatePageButtonAction]);

  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (profile && profile.email && !profile.id) {
      updateProfileAction({
        ...profile,
        email: email,
        picture: picture,
        userName: name,
        age: 30,
        phone: null,
        location: null,
        gender: "male",
        preferences: {
          relation_type: "romantic",
          gender: "any",
          minAge: 18,
          maxAge: 55,
        },
      });
    }
  });

  const getGoogleLoginData = useCallback(
    async (credentialResponse) => {
      const { email, picture, name } = jwt_decode(
        credentialResponse.credential
      );
      setEmail(email);
      setPicture(picture);
      setName(name);
      await fetchProfileAction(email);
    },
    [fetchProfileAction]
  );

  useEffect(() => {
    if (profile && profile.location && profile.id)
      fetchAchievementsAction(profile.id);
  }, [profile]);

  const googleLogIn = (
    <GoogleLogin
      onSuccess={(credentialResponse) => getGoogleLoginData(credentialResponse)}
      onError={() => {
        console.log("Google login failed");
      }}
      useOneTap
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
      {googleLogIn}
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
      <h1>Welcome!</h1>
      <h1 className="app-title">Quizy Smart Dating</h1>
      <p>Find your brainmate according to your interests and knowledge</p>
      <img src="/favicon.png" width="200px" alt="heart" />
      {loginOptions}
    </div>
  );
}
