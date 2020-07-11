import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import CartProduct from './CartProduct';
import {useCart} from '../context/useCart';
import {useDatabase} from '../context/use-database';

function Cart(props) {
    const cart = useCart();
    const database =  useDatabase();
    const [phone, setPhone] = useState('');
    const [customer, setCustomer] = useState('');
    const [address, setAddress] = useState('');
    const cartProduct = cart.cartProduct.map((item, index) => <CartProduct key={index} product={item} /> );
    let total = 0 ;
    cart.cartProduct.forEach((item) => { total += (parseInt(item.price) * item.quantity)});
    const handleAddOrder = () =>{
      if(cart.cartProduct.length === 0){ alert('Chưa đăng kí sản phẩm')}
      else if(customer !=='' && phone !== '' && address !== ''){
      database.addOrder(cart.cartProduct,customer,phone,address,total);
      props.history.push('/');
      alert('Gửi thông tin đơn hàng thành công');
    }else{ alert('Điền thông tin đơn hàng')}}
    return (
       <div>
  <section className="jumbotron text-center">
    <div className="container">
      <h1 className="jumbotron-heading text-uppercase">thông tin đơn hàng</h1>
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
              {cartProduct}
              <tr>
                <td />
                <td />
                <td><strong>Total</strong></td>
                <td className="text-right"><strong>{total}vnđ</strong></td>
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td>Họ tên khách hàng</td>
                <td><input className="form-control" type="text" onChange={(e) => { setCustomer(e.target.value)}} required /></td> 
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td>Số điện thoại</td>
               <td><input className="form-control" type="text"  onChange={(e) => { setPhone(e.target.value)}} required /></td> 
              </tr>
              <tr>
                <td />
                <td />
                <td />  
                <td>Địa chỉ</td>
                <td><input className="form-control" type="text" onChange={(e) => { setAddress(e.target.value)}} required  /></td> 
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col mb-2">
        <div className="row">
          <div className="col-sm-12  col-md-6">
            <Link to='/' className="btn btn-block btn-light">Quay lại Shopping</Link>
          </div>
          <div className="col-sm-12 col-md-6 text-right">
            <button type='reset'  className="btn btn-lg btn-block btn-success text-uppercase" onClick={handleAddOrder}>gửi thông tin đơn hàng</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default Cart;