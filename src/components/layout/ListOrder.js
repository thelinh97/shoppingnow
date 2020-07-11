import React, { useEffect, useState } from 'react';
import Order from './Order';
import {useDatabase} from '../context/use-database';
import { useAuth } from "../context/use-auth.js";
import { Redirect } from 'react-router-dom';

function ListOrder(props) {
    const database = useDatabase();
    const auth = useAuth();
    const order = database.listOrder ? database.listOrder.map((item,index) => <Order key={index} order={item}/> ) : null;
    if(!auth.user){ return <Redirect to='/signin' />}else{
        return (
            <div className='container'>
              {order}
            </div>
        );
    }
}

export default ListOrder;