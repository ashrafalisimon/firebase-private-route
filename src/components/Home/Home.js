import React from 'react';
import useFirebase from '../../hook/useFirebase';

const Home = () => {
    const {user} =useFirebase()
    return (
        <div>
            <h1>This is Home</h1>
            <p>{user? user.displayName: "No Body"}</p>
        </div>
    );
};

export default Home;