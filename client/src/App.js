import './App.css';
import React from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

import axios from "axios"
import { useEffect } from 'react';
axios.defaults.baseURL = "https://pi-food-production-3adc.up.railway.app/"

function App() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    useEffect(() =>{
      login()
    }, [])
    const login = useGoogleLogin({
      onSuccess: codeResponse => console.log(codeResponse),
      flow: 'auth-code',
    });

    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}
export default App;