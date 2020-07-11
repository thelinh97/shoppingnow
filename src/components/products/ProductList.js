import React from 'react';
import Product from './Product';
import {useDatabase} from '../context/use-database';

function ProductList(props) {
    const database = useDatabase();
  const products = database.products;
    return (
    <div className='col-md-12'>
  <div className="row row-cols-1 row-cols-md-4">
     { products.map((e) => {
    return <Product key={e[0]} product={e[1]}/>
  })}
</div>
</div>
    );
}

export default ProductList;