import React, { useState, useEffect, useContext, createContext } from "react";
import {database} from '../../config/firebase';
import moment from 'moment';
const { uuid } = require('uuidv4')
const databaseContext = createContext();

export function ProvideDatabase({ children }) {
    const database = useProvideDatabase();
    return <databaseContext.Provider value={database}>{children}</databaseContext.Provider>;
  }
  
  // Hook for child components to get the auth object ...
  // ... and re-render when it changes.
  export const useDatabase = () => {
    return useContext(databaseContext);
  };
  
  function useProvideDatabase(){
    const [products, setProduct] = useState([])
    const [strSearch, setStrSearch] = useState('')
    const [numSearch, setNumSearch] = useState('')
    const [listOrder, setListOrder] = useState(null)
    const [complete, setComplete] = useState([]);
    const [orderSt, setOrderSt] = useState(false);
    const [editProduct, setEditProduct] = useState({});
    const [idProduct, setIdProduct] = useState(null);
    const [editStatus, setEditStatus] = useState(false)
    const addProduct = (productName, imageUrl,amount,price) => {
        database.ref('products/' + uuid()).set({
          name: productName,
          img: imageUrl,
          amount: amount,
          price: price
        });
      }
      const addOrder = (order,customer,phone,address, total) => {
        let listOrder = ''
        order.forEach((item) => { listOrder += `{"name":"${item.name}", "amount":"${item.quantity}", "price": "${item.price}", "img": "${item.img}"}|`});
        database.ref('order/' + moment().format('MMMM Do YYYY, h:mm:ss a')).set({
          listOrder: listOrder,
          customer: customer,
          phone: phone,
          address: address,
          total: total
        });
      }

      const updateProduct = ( amount, img, name, price) =>{
        database.ref('products/' + idProduct).set({
          name: name,
          img: img,
          amount: amount,
          price: price
        });
      }

      const searchStr = (str) =>{
        setStrSearch(str);
      }

      const searchNum = (num) =>{
        setNumSearch(num);
      }

        const addComplete = (keyOrder) =>{
         
         let arrComplete = [...complete];
         console.log(arrComplete.indexOf(keyOrder))
         if(arrComplete.indexOf(keyOrder) === -1){
         arrComplete.push(keyOrder);
         setComplete(arrComplete);
         }else{
           const index = arrComplete.indexOf(keyOrder);
            arrComplete.splice(index,1);
           setComplete(arrComplete);
         }
        }

        const deleteComplete = () =>{
          complete.forEach(item =>{
            database.ref('order').child(item).remove();
          });
          setComplete([]);
          setOrderSt(!orderSt)
        }

        const edit = (id, product) =>{
          setIdProduct(id);
          setEditProduct(product);
          setEditStatus(!editStatus)
        }

        const deleteProduct = (id) =>{
          database.ref('products').child(id).remove();
        }

        useEffect(()=>{
            database.ref('products/').on('value', data =>{
              let arrProducts = []
              Object.entries({...data.val()}).forEach(i => {
                 if(i[1].name.indexOf(strSearch) !== -1 &&  i[1].price < parseInt (numSearch)){
                   arrProducts.push(i)
                 }else if ( i[1].name.indexOf(strSearch) !== -1  && numSearch === '0'){
                  arrProducts.push(i)
                 }
                })
                setProduct(arrProducts)
            })},[strSearch, numSearch])

            useEffect(()=>{
        database.ref('order/').on('value', data =>{
            setListOrder(Object.entries({...data.val()}))
        });
    },[]);

    return {
        products,
        addProduct,
        addOrder,
        searchStr,
        searchNum,
        listOrder,
        addComplete,
        complete,
        deleteComplete,
        orderSt,
        editProduct,
        updateProduct,
        edit,
        editStatus,
        setEditStatus,
        deleteProduct
    }
      
  }