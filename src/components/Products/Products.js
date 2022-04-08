import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

    const auth = getAuth(app);
const Products = () => {
    const [user] =useAuthState(auth);
    return (
        <div>
            <h1>This is product page</h1>
            <h4>{user? user.displayName: "NO Name"}</h4>
        </div>
    );
};

export default Products;