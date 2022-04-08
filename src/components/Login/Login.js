import React from 'react';
import useFirebase from '../../hook/useFirebase';
import "./Login.css"

const Login = () => {
    const {singInWithGoogle} =useFirebase();
    return (
        <div>
            <h2>Please Login!!!!</h2>
            <div>
                <button onClick={singInWithGoogle} className='google-btn'>Google Sing In</button>
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