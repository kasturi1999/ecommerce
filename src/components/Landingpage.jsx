import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Product from './Product'
import Footer from './Footer'

export default function Landingpage() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Product/> <br />
      <Footer/>
    </div>
  )
}
