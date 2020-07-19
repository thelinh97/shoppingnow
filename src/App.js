import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuManager from './components/layout/MenuManager'
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
import MenuCustomer from './components/layout/MenuCustomer';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const auth = useAuth()
  return (
    <Layout>
      <Header>{ auth.user ?  <MenuManager/> : <MenuCustomer/> }</Header>
      <Content>
          <Switch>
            <Route  exact path="/" component={ Container}/>
            <Route   path="/signin" component={SignIn}/>
            <Route  path="/signup" component={SignUp}/>
            <Route  path="/cart" component={Cart}/>
            <Route   path="/inventory" component={InfoInventory}/>
            <Route   path="/listorder" component={ListOrder}/>
          </Switch>
      </Content>
      <Footer style={{ textAlign: 'center', padding:'20px', marginTop: '20px', backgroundColor: '#dedada' }}>Shoppingnow ©2020 Created by The Linh</Footer>
    </Layout>
  );
}

export default App;

