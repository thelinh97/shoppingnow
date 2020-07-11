import React from 'react'
import ProductList  from '../products/ProductList'





function  Container(props) {
    return (
        <div className='container-fluid mt-5'>
        <div className='row'>
            <ProductList/>
        </div>
    </div>
    );
}

export default Container;
