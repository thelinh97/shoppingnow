import React,{useContext, useState, createContext, useEffect} from 'react';

const cartContext = createContext();


export const useCart = () =>{
    return useContext(cartContext)
}

export function ProdiveCart({children}){
    const cart = useProvideCart();
    return <cartContext.Provider value={cart}>{children}</cartContext.Provider>
}

function useProvideCart (){
    let [cart, setCart] = useState(0);
    const [cartProduct, setCartProduct] = useState([])
    const addCart = (product) => {
            let newCart = [...cartProduct];
            if(newCart.indexOf(product) === -1){
            setCart(cart += 1);
            newCart.push(product);
            setCartProduct(newCart)
            }else{
           alert('Sản phẩm đã thêm vào giỏ');
            }
        }
        const total = (product,quantity) =>{
           const arrOrder = [...cartProduct]
            arrOrder.map((item) => {if(item.name === product.name){item.quantity = quantity}; return item});
            setCartProduct(arrOrder)
        }
       const deleteProduct = (product) =>{
          const arr = [...cartProduct]
          if(arr.indexOf(product) !== 1){
            setCart(cart -= 1);
              const index = arr.indexOf(product);
              arr.splice(index,1);
           }
         setCartProduct(arr)
         
       }
       
    return{
        cart,
        addCart,
        cartProduct,
        total,
        deleteProduct
    }
}