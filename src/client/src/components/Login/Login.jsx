import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          navigate("/quiz");
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  )

}
