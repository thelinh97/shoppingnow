import React from 'react';
import UpdateInfoProduct from '../products/UpdateInfoProduct';
import {useDatabase} from '../context/use-database';
import Tbody from './Tbody';
import { useAuth } from "../context/use-auth.js";
import { Redirect } from 'react-router-dom';
import EditProduct from '../products/EditProduct';

function InfoInventory(props) {
  const auth = useAuth()
    const database = useDatabase();
    const products = database.products;
    let inventoryMoney = 0;
    let amountInventory = 0;
    const tableBody = products.map((item,index) => {
        amountInventory += parseInt(item[1].amount);
        inventoryMoney += (parseInt(item[1].price) * parseInt(item[1].amount))
        return <Tbody key={index} stt={index +1} id={item[0]} product={item[1]}/>
    } ) 
    if(!auth.user){ return <Redirect to='/signin'/>}else{
    return (
        <div className='container mt-5'>
            <div className='row'>
                { database.editStatus ?  <EditProduct/> : <UpdateInfoProduct/>} 
                <div className='col-8'>
                <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Tên sản phẩm</th>
      <th scope="col">Số lượng</th>
      <th scope="col">Giá</th>
      <th scope="col">Tổng tiền</th>
    </tr>
  </thead>
  <tbody>
    {tableBody}
    <tr>
      <th></th>
    <td>số sản phẩm tồn kho:</td>
    <td>{amountInventory}</td>
    <td>Tiền tồn kho:</td>
    <td>{inventoryMoney}</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    );
  }
}

export default InfoInventory;