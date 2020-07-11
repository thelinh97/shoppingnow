import React from 'react';

function OrderProduct({product}) {
  const objProduct = JSON.parse(product);
    const styleImg = {
    width : '50px',
    height: '50px'
  }
    return (
        <tr>
        <td><img src={objProduct.img} style={styleImg} alt='' /> </td>
    <td>{objProduct.name}</td>
    <td>Số lượng: {objProduct.amount}</td>
    <td className="text-right">Giá: {objProduct.price}</td>
    <td>vnđ</td>
      </tr>
    );
}

export default OrderProduct;