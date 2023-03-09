import {auth} from 'fb/firebaseConfig';
import {GoogleAuthProvider, signInWithPopup} from '@firebase/auth';
import {useState} from 'react';

const Login: React.FC = () => {
  
  const [userData, setUserData] = useState<any>(); //들어오는 거 보고 타입지정

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return <div>
    <button onClick={handleGoogleLogin}>로그인</button>
    {userData ? JSON.stringify(userData) : '로그인하셈'}
  </div>;

};

export default Login;
