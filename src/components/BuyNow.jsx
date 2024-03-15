import React, { useState } from 'react'
import Navbar from './Navbar'
import { Box, Button, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function BuyNow() {

    const [cart, setCart] = React.useState([])
    let [count, setCount] = useState(1)
    const [able, setAble] = useState(false)

    let navigate = useNavigate()


    let allcount = cart.price * count

    // console.log(cart);
    //   console.log(allcount);

    function increment() {

        setCount(count + 1)
        if (count > -1) {
            setAble(false);
        }
    }

    function decrement() {
        setCount(count - 1)
        if (count < 3) {
            setAble(true);
        }
    }


    let { id } = useParams();

    function loadData() {
        axios.get("https://65bb4da052189914b5bbad36.mockapi.io/Product/" + id)
            .then((res) => {
                console.log(res.data);
                setCart(res.data)

            })
    }
    React.useEffect(() => {
        if (id) {
            loadData();
        }
    }, [])


    


    let alluserdata = localStorage.getItem("username")



    function HandlePassData() {
  
      if (alluserdata) {
  
        let order = {
          title: cart.title,
          category: cart.category,
          price: cart.price,
          mrp: cart.mrp,
          image: cart.image,
          subtotal: allcount,
          quantity: count,
        }
        // console.log(order);
        // alert("hllo")
        // e.preventDefault()
        axios.post("https://65bb4da052189914b5bbad36.mockapi.io/Ordertale", order)
          .then((res) => {
            console.log(res.data);
            setCart(res.data)
          })
        navigate("/ordertable")
  
      } else {
  
        navigate("/userLogin")
  
        let order = {
          title: cart.title,
          category: cart.category,
          price: cart.price,
          mrp: cart.mrp,
          image: cart.image,
          subtotal: allcount,
          quantity: count,
        }
        // console.log(order);
        // alert("hllo")
        // e.preventDefault()
        axios.post("https://65bb4da052189914b5bbad36.mockapi.io/Ordertale", order)
          .then((res) => {
            console.log(res.data);
            setCart(res.data)
          })
      }
  
    }
  

    return (
        <div>
            <Navbar />
            {
                <div className="container" style={{ marginTop: "100px" }}>
                    <div className="row">
                        <div className="col-lg-5">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="530"
                                image={cart.image}
                            />
                        </div>
                        <div className="col-lg-7">
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <h1 className='text-center mt-5 fw-boler'><b><i>{cart.title}</i></b></h1>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* <h5 className='mt-3' ><i style={{ marginLeft: "320px" }}>{cart.description}</i></h5><br /> */}
                                    <div className='text-center'>
                                        <h4>MRP:- <strike>₹{cart.mrp}</strike></h4><br />
                                        <h4>PRICE:- ₹{allcount}</h4><br /><hr /><br />
                                        {/* <Button variant="contained" disableElevation className='mt-3' ></Button><br /><br /> */}
                                        <Box className='d-flex' style={{ marginLeft: "270px" }}>
                                             
                                        <button onClick={() => increment()}>+</button>

                                        {/* <h1>{count}</h1> */}
                                        <Box className='form-control text-center w-25'>{count}</Box>
                                        <button disabled={able} onClick={() => decrement()}>-</button><br /><br />
                                        </Box>
                                        <br /><br />
                                        <Button variant="contained" disableElevation onClick={((e) => HandlePassData(e))} style={{ backgroundColor: "purple" }}>ORDER NOW</Button>
                                    </div>
                                </Typography>
                            </CardContent>
                            
                        </div>


                    </div>

                </div>
            }
        </div>

    )
}
