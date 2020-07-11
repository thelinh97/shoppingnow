import React from 'react';
import {useCart} from '../context/useCart';


function Product({product}) {
  const cart = useCart();

  const handleBuy = (e) =>{
    e.preventDefault();
    cart.addCart(product);
  }

  function formatCurrency(n, separate = "."){
    var s = n.toString();
    var regex = /\B(?=(\d{3})+(?!\d))/g;
    var ret = s.replace(regex, separate);
    return ret;
  }
 
  const price = formatCurrency(product.price);

  const styleImg = {
    width : '250px',
    height: '250px'
  }

    return (
       <div className="col mb-4">
  <div className="card">
    <img src={product.img} style={styleImg} className="card-img-top" alt="..." />
    <div className="card-body">
      <div className='d-flex justify-content-between'>
    <p className="text-success m-0">{product.name}</p>
        <button type="button" className="btn btn-light" onClick={(e)=> handleBuy(e)}>Thêm vào giỏ</button>
        </div>
      <h6 className='d-flex justify-content-between'>
    <span className="badge badge-warning float-left">Giá: {price}đ</span>
      </h6>
    </div>
  </div>
</div>

    );
}

export default  Product  ;