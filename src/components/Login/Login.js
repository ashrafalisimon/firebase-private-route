import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hook/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import "./Login.css"

    const auth =getAuth(app);
const Login = () => {
    // const {singInWithGoogle} =useFirebase();
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const googleWithSingIn = ()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from, { replace: true });
        })
    }
    return (
        <div>
            <h2>Please Login!!!!</h2>
            <div>
                <button onClick={googleWithSingIn} className='google-btn'>Google Sing In</button>
            </div>
            <form>
                 <input type="email" name="" placeholder='Please Enter Your Email' id="" />
                <input type="password" name="" placeholder='Please Enter Your Password' id="" />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;