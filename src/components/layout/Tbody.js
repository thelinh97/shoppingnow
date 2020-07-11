import React from 'react';
import {useDatabase} from '../context/use-database';

function Tbody({stt,product,id}) {
    const {edit, deleteProduct} = useDatabase();

    const handleEdit = () => {
      edit(id,product)
    };

    const handleDel = () => {
      deleteProduct(id)
    };

    function formatCurrency(n, separate = "."){
      var s = n.toString();
      var regex = /\B(?=(\d{3})+(?!\d))/g;
      var ret = s.replace(regex, separate);
      return ret;
    }

    return (
    <tr>
      <th scope="row">{stt}</th>
    <td>{product.name}
      <button type="button" className="btn btn-outline-warning mx-1 float-right" onClick={handleDel} >Xóa</button>
      <button type="button" className="btn btn-outline-info mx-1 float-right" onClick={handleEdit}>Sửa</button>
    </td>
    <td>{ formatCurrency(product.amount)}</td>
    <td>{ formatCurrency(product.price)} vnđ</td>
    <td>{ formatCurrency(parseInt(product.price) * parseInt(product.amount))} vnđ</td>
    </tr>
    );
}

export default Tbody;