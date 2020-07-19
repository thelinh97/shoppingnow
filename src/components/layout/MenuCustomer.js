import React, { useState, useEffect } from 'react';
import { useAuth } from "../context/use-auth.js";
import {useCart} from '../context/useCart';
import iconCart from '../../icon/smart-cart.svg'
import {Link} from 'react-router-dom';
import {useDatabase} from '../context/use-database'

function  MenuCustomer(props) {
    const auth = useAuth();
    const cart = useCart();
    const database = useDatabase();
    const [strSearch, setStrSearch] = useState('');
    const [numSearch, setNumSearch] = useState('0');
  const handleSearch = (e) =>{
    setStrSearch(e.target.value);
  }
    useEffect(() =>{
      database.searchStr(strSearch);
      database.searchNum(numSearch);
    },[strSearch, numSearch])
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
          {auth.user ?  <Link className="navbar-brand" to="/inventory">Inventory Management</Link> : null}
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
              <Link className="nav-link text-white" to='/'>Shoppingnow!!!</Link>
            </li>
          <li className="nav-item">
    <Link className="nav-link text-white" to="/cart"><img src={iconCart} style={{width:'1.5em', height:'1.5em'}} alt="iconCart" />({cart.cart})</Link>
            </li>
            <li className="nav-item ml-5">
            <select  className="custom-select" onChange={(e) => {setNumSearch(e.target.value)}}>
            <option value={0}>Chọn mức giá</option>
              <option value={200*1000}> Dưới 200.000đ</option>
              <option value={500*1000}> Dưới 500.000đ</option>
              <option value={1000*1000}> Dưới 1.000.000đ</option>
            </select>

            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={(e) =>{handleSearch(e)}}  />
          </form>
        </div>
      </nav>
    );
}

export default MenuCustomer;