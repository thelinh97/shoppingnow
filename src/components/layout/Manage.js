import React, { useState , useEffect} from 'react'
import ProductList  from '../products/ProductList'
import { useAuth } from "../context/use-auth.js";
import { Redirect } from 'react-router-dom';



function  Manage(props) {
    const auth = useAuth();
    const [user, setUser]  = useState(auth.user)
    useEffect (() =>{
        setUser(auth.user)
    },[auth.user])
    
    if(user === false){ return <Redirect to ='/signin'/>}else{
    return (
        <div className='container-fluid mt-5'>
        <div className='row'>
            <ProductList/>
        </div>
    </div>
    );
}}

export default Manage;
