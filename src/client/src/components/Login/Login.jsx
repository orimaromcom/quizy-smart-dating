import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCallback, useState } from "react";
// import UserApiService from "../../services/user-api-service";
import jwt_decode from "jwt-decode";
import "./Login.css";


export default function Login({
                                profile,
                                fetchProfileAction, updateProfileAction
                              }) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log('profile', profile);
    if (profile.id) {
      navigate("/profile");
    }
  }, [navigate, profile]);

  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (profile.email && !profile.id) {
      console.log('updateProfileActions');
      console.log('email', email, 'picture', picture, 'name', name);
      updateProfileAction({
        // ...profile, email: email, picture: picture, userName: name
          email: email,
          userName: name,
          age: 18,
          phone: "your phone",
          location: "your location",
          picture: picture,
          gender: "other",
          preferences: {
            relation_type: "friends",
            gender: "any",
            minAge: 25,
            maxAge: 55,
        },
      });
      console.log('UserApiService.setTriviaStatistics(email)');
//      UserApiService.setTriviaStatistics(email);
    }
  })

  const getGoogleLoginData = useCallback(async (credentialResponse) => {
    const { email, picture, name } = jwt_decode(credentialResponse.credential);
    setEmail(email);
    setPicture(picture);
    setName(name);
    await fetchProfileAction(email);
  },[fetchProfileAction,]);

  const googleLogIn = <GoogleLogin
                        onSuccess={(credentialResponse) => getGoogleLoginData(credentialResponse)}
                        onError={() => {
                          console.log('Google login failed');
                        }}
                      />

  const [testEmail, setTestEmail] = useState("");
  const [pass, setPass] = useState("");

  const getTesterLoginData = useCallback(async (event) => {
    event.preventDefault();
    const testUserEmail = testEmail;
    // setTestEmail("");
    const secretPass = pass;
    setPass("");
    if (secretPass !== process.env.REACT_APP_TESTING_PASSWORD) {
      console.log('Invalid password');
    } else {
      await fetchProfileAction(testUserEmail);
    }
  },[testEmail, pass, fetchProfileAction]);

  const testerLogin = <form onSubmit={(e) => getTesterLoginData(e)}>
                        <label>
                          User email
                          <input type="text" name="email"
                            value={testEmail} onChange={(e) => setTestEmail(e.target.value)}/>
                        </label>
                        <br />
                        <label>
                          Password
                          <input type="password" name="password"
                            value={pass} onChange={(e) => setPass(e.target.value)}/>
                        </label>
                        <br />
                        <input type="submit" value="Log in" />
                      </form>
  let loginOptions;
  loginOptions = <div>
                    <h1>Google Login</h1>
                    { googleLogIn }
                    <br /><br /><br />
                    <h1>Tester Login</h1>
                    { testerLogin }
                  </div>
  return (
    <div className="login-container">
      <h1>Welcome to Quizy Smart Dating</h1>
      <img src="/favicon.png" width="200px" alt="heart"/>
      { !profile.email &&
        loginOptions
      }
    </div>
  )
}
