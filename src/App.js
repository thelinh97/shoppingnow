import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layout/NavBar'
import SignIn from './components/author/SignIn';
import SignUp from './components/author/SignUp';
import {
  Switch,
  Route,
} from "react-router-dom";
import Container from './components/layout/Container';
import Cart from './components/cart/Cart';
import InfoInventory from './components/layout/InfoInventory';
import  ListOrder from './components/layout/ListOrder';
import { useAuth } from './components/context/use-auth';
import NavCustomer from './components/layout/NavCustomer';

function App() {
  const auth = useAuth()
  return (
    <div>
      {auth.user ?  <NavBar/> : <NavCustomer/> }
     <Switch>
     <Route  exact path="/" component={ Container}/>
      <Route   path="/signin" component={SignIn}/>
      <Route  path="/signup" component={SignUp}/>
      <Route  path="/cart" component={Cart}/>
      <Route   path="/inventory" component={InfoInventory}/>
      <Route   path="/listorder" component={ListOrder}/>
    </Switch>
    </div>
  );
}

export default App;

