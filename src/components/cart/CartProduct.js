import React, { useState, useEffect } from 'react';
import recycle from '../../icon/delete.svg';
import {useCart} from '../context/useCart';

function CartProduct(props) {
  const {product} = props;
  const [quantity, setQuantity] = useState(1);
  const cart = useCart();
  const styleImg = {
    width : '50px',
    height: '50px'
  }
 
  useEffect(() =>{
    cart.total(product,quantity)
  },[quantity,product])
   const handleOnchange = (e) => {
    setQuantity(e.target.value);
  }
  const handleDelete = (e) =>{
    console.log('ok')
    e.preventDefault();
    cart.deleteProduct(product)
  }
    return (
        <tr>
        <td><img src={product.img} style={styleImg} alt='' /> </td>
      <td>{product.name}</td>
        <td><input className="form-control" type="number" id='quantity' min="1" defaultValue={quantity}  onChange={(e) => {handleOnchange(e)}}  /></td>
        <td className="text-right">{product.price * quantity}</td>
        <td className="text-right"><button className="btn btn-sm btn-danger" onClick={handleDelete}><img src={recycle} style={{width:'1.5em', height:'1.5em'}} alt=''/> </button> </td>
      </tr>
    );
}

export default CartProduct;