import React,{useState, useEffect}from 'react';
import './UpdateInfoProduct.css'
import {useDatabase} from '../context/use-database';
import {storage} from '../../config/firebase';


function UpdateInfoProduct(props) {
    const database = useDatabase()
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productAmount, setProductAmount] = useState('');
    const [nameImg, setNameImg] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const uploadImg = (e) =>{
      const img = e.target.files[0];
      setNameImg(img.name)
      var uploadTask = storage.ref(`img/${img.name}`).put(img);
      uploadTask.on('state_changed', function(snapshot){}, function(error) {
          // Handle unsuccessful uploads
          alert(error)
        }, function() {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          storage.ref('img').child(img.name).getDownloadURL().then(function(downloadURL) {
            setImgUrl(downloadURL)
          });
        });
       }

   const handleSubmit =  () => {
    if(productName !== '' && productPrice !== '' && productAmount !== '' && imgUrl !== ''){
      database.updateProduct(productAmount, imgUrl, productName, productPrice);
      setProductAmount('');
      setProductName('');
      setProductPrice('');
      setImgUrl('')
     }else { alert('Điền thông đầy đủ thông tin sản phẩm')};
   }
    
   const styleImg = {
    width : '200px',
    height: '200px'
  }

    return (
       <div className="col-4 login-block">
  <div className="container">
    <div className="row ">
      <div className="col login-sec">
        <h2 className="text-center">Thêm sản phẩm</h2>
        <img src={imgUrl ? imgUrl : 'https://via.placeholder.com/200'} style={styleImg} alt={productName} />
        <form className="login-form">
          <div className="form-group">
            <label  className="text-uppercase">Product name</label>
            <input type="text" className="form-control" onChange={(e) => {setProductName(e.target.value)}} />
          </div>
          <div className="form-group">
            <label  className="text-uppercase">Price</label>
            <input type="text" className="form-control"  onChange={(e) =>{setProductPrice(e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""))}} />
          </div>
          <div className="form-group">
            <label  className="text-uppercase">Amount</label>
            <input type="number" className="form-control" pattern="[0-9]*" min="1"   onChange={(e) => {setProductAmount(e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""))}} />
          </div>
        <div className="custom-file">
        <input type="file" className="custom-file-input" id="customFile" onChange={(e) => { uploadImg(e) }} />
    <label className="custom-file-label" htmlFor="customFile">{nameImg !== '' ? nameImg : 'Image product'}</label>
        </div>
        <button type="reset" className="btn btn-login mt-3" onClick={ handleSubmit }>Thêm sản phẩm</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
}

export default UpdateInfoProduct;