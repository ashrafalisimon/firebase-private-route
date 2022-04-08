import React from 'react';
import useFirebase from '../../hook/useFirebase';

const Products = () => {
    const {user} =useFirebase();
    return (
        <div>
            <h1>This is product page</h1>
            <h4>{user? user.displayName: "NO Name"}</h4>
        </div>
    );
};

export default Products;