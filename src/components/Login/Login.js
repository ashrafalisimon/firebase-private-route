import React from 'react';
import "./Login.css"

const Login = () => {
    return (
        <div>
            <h2>Please Login!!!!</h2>
            <form>
                 <input type="email" name="" placeholder='Please Enter Your Email' id="" />
                <input type="password" name="" placeholder='Please Enter Your Password' id="" />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;