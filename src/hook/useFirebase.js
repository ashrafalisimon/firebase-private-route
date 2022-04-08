import { useEffect, useState } from "react";

const useFirebase = ()=>{
    const [user, setUser] =useState();
    useEffect({

    },[]);
    const singInWithGoogle =()=>{
        console.log('singIn Complete')
    }
    return [user,setUser];

}
export default useFirebase;