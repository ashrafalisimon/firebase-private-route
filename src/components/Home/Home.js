import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

    const auth = getAuth(app)
const Home = () => {
    const [user] =useAuthState(auth);
    return (
        <div>
            <h1>This is Home</h1>
            <p>{user? user.displayName: "No Body"}</p>
        </div>
    );
};

export default Home;