import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import UserApiService from "../../services/user-api-service";
import jwt_decode from "jwt-decode";


export default function Login({
                                userId, userEmail, userName, userPicture,
                                setUserAction, resetUserAction
                              }) {
  const navigate = useNavigate();
  const getGoogleLoginData = async (credentialResponse) => {
    const {email, picture, name} = jwt_decode(credentialResponse.credential);
    console.log('email ', email);
    const userInfo = await UserApiService.getUserByEmail(email);
    if (userInfo.id === null) {
      userInfo.picture = picture;
      userInfo.userName = name;
    }
    setUserAction(userInfo);
  }


  const goToProfilePage = () => {
    navigate("/profile");
  }

  const GoogleLogIn = <GoogleLogin
                        onSuccess={(credentialResponse) => getGoogleLoginData(credentialResponse)}
                        onError={() => {
                          console.log('Login failed');
                        }}
                      />

  const [testEmail, setTestEmail] = useState("");
  const [pass, setPass] = useState("");

  const getTesterLoginData = useCallback(async (event) => {
    event.preventDefault();
    const testUserEmail = testEmail;
    setTestEmail("");
    const secretPass = pass;
    setPass("");
    console.log('testUserEmail', testUserEmail);
    const userInfo = await UserApiService.getUserByEmail(testUserEmail);
    if (userInfo.id === null || secretPass !== process.env.REACT_APP_TESTING_PASSWORD) {
      console.log('Error, invalid data');
    } else {
      setUserAction(userInfo);
    }
  },[testEmail, pass, setUserAction]);

  const TesterLogin = <form onSubmit={getTesterLoginData}>
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
  let loginResult;
  if (!userEmail) {
    loginResult = <div>
                    <h1>Google Login</h1>
                    { GoogleLogIn }
                    <br /><br /><br />
                    <h1>Tester Login</h1>
                    { TesterLogin }
                  </div>
  } else if (userId) {
    navigate("/profile");
    loginResult = <div>
                    <h1>You are authorized</h1>
                    <p>email: {userEmail}</p>
                    <p>userName: {userName}</p>
                    <p>id: {userId}</p>
                  </div>
  } else {
    navigate("/profile");
    loginResult = <div>
                    <h1>You are signing up</h1>
                    <br />
                    <p>You already have email: {userEmail}</p>
                    <p>But your user id is not defined: null {userId}</p>
                    <br />
                    <button onClick={goToProfilePage}>Go to profile page</button>
                    <br /> <br />
                    <p>There will be shown your</p>
                    <p>email: {userEmail}</p>
                    <p>userName: {userName}</p>
                    <p>userPicture: {userPicture.slice(0,20)}</p>
                    <p>(From the server they will come like null, but we can replace them with the info from the state)</p>
                    <p>(And we also need to create a raw for Trivia answers!)</p>
                    <br /> <br />
                  </div>
  }

  return (
    <div>
      {loginResult}
      {
        userEmail &&
        <button onClick={resetUserAction}>Log out</button>
      }
    </div>
  )
}
