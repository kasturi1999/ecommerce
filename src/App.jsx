import * as React from 'react';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Landingpage from './components/Landingpage';
import AddProduct from './components/AddProduct';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import BuyNow from './components/BuyNow';
import Ordertable from './components/Ordertable';
import Bill from './components/Bill';
import UserLogin from './components/UserLogin';


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/BuyNow' element={<BuyNow/>}/>
      <Route path='/BuyNow/:id' element={<BuyNow/>}/>
      <Route path='/ordertable' element={<Ordertable/>}/>
      <Route path='userLogin' element={<UserLogin />} />
      <Route path='bill' element={<Bill />} />

      <Route path='/admin' element={<Admin/>}>
        <Route path='/admin' element={<Dashboard/>}/>
        <Route path='/admin/product' element={<AddProduct/>}/>
        <Route path='/admin/product/:id' element={<AddProduct/>}/>
        <Route path='/admin/products' element={<Products/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
