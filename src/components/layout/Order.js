import React, { useState, useEffect } from 'react';
import {useDatabase} from '../context/use-database'
import OrderProduct from './OrderProduct';

function Order({order}) {
  const {addComplete,orderSt} = useDatabase();
  let arr = order[1].listOrder.split('|');
  const [stComplete, setStComplete] = useState(false) ;
  arr.splice(arr.length - 1, 1)
 const orderProduct = arr.map((item,index) => <OrderProduct key={index} product={item}/>);
 const handleComplete = ()=>{
  setStComplete(!stComplete);
  addComplete(order[0])
 }
useEffect(()=>{
  setStComplete(false)
},[orderSt])
    return (
       <div>
  <section className="jumbotron text-center">
    <div className="container">
    <h1 className="jumbotron-heading text-uppercase" onClick={handleComplete} style={stComplete ? {textDecoration: 'line-through'}: null} >{order[0]}</h1>
    </div>
  </section>
  <div className="container mb-4">
    <div className="row">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">Product</th>
                <th scope="col" className="text-center">Quantity</th>
                <th scope="col" className="text-right">Price</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {orderProduct}
              <tr>
              <td />
                <td />
                <td><strong>Total</strong></td>
    <td className="text-right"><strong>{order[1].total}</strong></td>
                <td>vnđ</td>
              </tr>
              <tr>
                <td />
                <td />
                <td>Họ tên khách hàng</td>
                <td>{order[1].customer}</td> 
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td>Số điện thoại</td>
                <td>{order[1].phone}</td> 
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td>Địa chỉ</td>
                <td>{order[1].address}</td> 
                <td />  
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default Order;