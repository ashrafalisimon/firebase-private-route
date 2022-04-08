import React from 'react';
import './Resister.css';

const Resister = () => {
    return (
        <div>
            <h2>Please Resister!!!!</h2>
            <form>
                <input type="text" name="" placeholder='Please Enter Your Name' id="" />
                <input type="email" name="" placeholder='Please Enter Your Email' id="" />
                <input type="password" name="" placeholder='Please Enter Your Password' id="" />
                <input type="submit" value="Resister" />
            </form>
        </div>
    );
};

export default Resister;