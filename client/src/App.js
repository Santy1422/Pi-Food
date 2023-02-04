import React, { useEffect } from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

function App() {
  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
  });

  useEffect(() => {
    login();
  }, []);

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin />
    </div>
  );
}

export default App;