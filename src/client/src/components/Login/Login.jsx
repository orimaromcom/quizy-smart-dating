import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import jwt_decode from "jwt-decode";
import "./Login.css";


export default function Login({
                                profile,
                                fetchProfileAction, updateProfileAction
                              }) {
  const navigate = useNavigate();
  // const getGoogleLoginData = async (credentialResponse) => {
  //   const {email, picture, name} = jwt_decode(credentialResponse.credential);
  //   await fetchProfileAction(email);
  //   if (profile.id === null) {
  //     profile.picture = picture;
  //     profile.userName = name;
  //   }
  //   updateProfileAction(profile);
  // }

  // const googleLogIn = <GoogleLogin
  //                       onSuccess={(credentialResponse) => getGoogleLoginData(credentialResponse)}
  //                       onError={() => {
  //                         console.log('Login failed');
  //                       }}
  //                     />

  const [testEmail, setTestEmail] = useState("");
  const [pass, setPass] = useState("");

  const getTesterLoginData = useCallback(async (event) => {
    event.preventDefault();
    const testUserEmail = testEmail;
    // setTestEmail("");
    const secretPass = pass;
    setPass("");
    const x = await fetchProfileAction(testUserEmail);
    console.log('await fetchProfileAction(testUserEmail)', x);
    console.log('profile', profile);
    if (profile.id === null || secretPass !== process.env.REACT_APP_TESTING_PASSWORD) {
      console.log('Error, invalid data');
    }
  },[testEmail, pass, fetchProfileAction, profile]);

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
                    {/* { googleLogIn } */}
                    <br /><br /><br />
                    <h1>Tester Login</h1>
                    { testerLogin }
                  </div>
  // useEffect(() => {
  //   console.log('profile', profile)
  //   if (profile) {
  //     navigate("/profile");
  //   }
  // }, [navigate, profile]);
  console.log('profile', profile)
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
