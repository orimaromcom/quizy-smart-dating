import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import UserApiService from "../../services/user-api-service";
import jwt_decode from "jwt-decode";


export default function Login({
                                userId, userEmail, userName, userPicture,
                                setUserAction, resetUserAction
                              }) {
  const navigate = useNavigate();
  async function getGoogleLoginData(credentialResponse) {
    const {email, picture, name} = jwt_decode(credentialResponse.credential);
    console.log('email', email);
    const userInfo = await UserApiService.getUserByEmail(email);
    if (userInfo.id === null) {
      userInfo.picture = picture;
      userInfo.userName = name;
    }
    setUserAction(userInfo);
  }

  function goToProfilePage() {
    navigate("/profile");
  }

  return (
    <div>
      <h1>Login</h1>
      { !userEmail &&
        <GoogleLogin
          onSuccess={getGoogleLoginData}
          onError={() => {
            console.log('Login failed');
          }}
        />
      }
      {
        userEmail && userId &&
        <div>
          <h1>You are authorized</h1>
          <p>email: {userEmail}</p>
          <p>userName: {userName}</p>
          <p>id: {userId}</p>
        </div>
      }
      {
        userEmail && !userId &&
        <div>
          <h1>You are signing up</h1>
          <br />
          <p>You alredy have email: {userEmail}</p>
          <p>But your user id is: null {userId}</p>
          <br />
          <button onClick={goToProfilePage}>Go to profile page</button>
          <br /> <br />
          <p>There will be shown your</p>
          <p>email: {userEmail}</p>
          <p>userName: {userName}</p>
          <p>userPicture: {userPicture.slice(0,20)}</p>
          <p>(From the server they will come like null, but we can replace them with the info from the state)</p>
          <br /> <br />
        </div>
      }{
        userEmail &&
        <button onClick={resetUserAction}>Log out</button>
      }

      <br /><br /><br />
      <h1>Tester login</h1>
      <form action="">
        user email: <input type="text" /> <br />
        password: <input type="text" />
      </form>
    </div>
  )
}
