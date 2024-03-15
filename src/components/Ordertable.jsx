import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Ordertable() {

    const [orderedData, setOrderdData] = useState([])

    function gettingData() {
        axios.get("https://65bb4da052189914b5bbad36.mockapi.io/Ordertale")
            .then((res) => {
                console.log(res.data);
                setOrderdData(res.data)
            })
    }
    function ItemDelete(e, id) {
        e.preventDefault()
        axios.delete("https://65bb4da052189914b5bbad36.mockapi.io/Ordertale/" + id)
            .then((res) => {
                console.log(res.data);
                gettingData();
            })
    }

    useEffect(() => {
        gettingData();
    }, [])

    return (
        <div>
            <Navbar />
            <br /><br /><br />
            <TableContainer >
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>

                            <TableCell>No</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell >Category</TableCell>
                            <TableCell >Quantity</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell >MRP</TableCell>
                            <TableCell >Subtotal</TableCell>
                            <TableCell >Image</TableCell>
                            <TableCell  >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orderedData.map((eachdat, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell >{eachdat.title}</TableCell>
                                        <TableCell >{eachdat.category}</TableCell>
                                        <TableCell >{eachdat.quantity}</TableCell>
                                        <TableCell >{eachdat.price}</TableCell>
                                        <TableCell >{eachdat.mrp}</TableCell>
                                        <TableCell >{eachdat.subtotal}</TableCell>
                                        <TableCell ><img src={eachdat.image} style={{ width: "90px" }} /> </TableCell>



                                        <TableCell  ><Button variant="contained" onClick={((e) => ItemDelete(e, eachdat.id))} style={{ backgroundColor: "red" }}>Delete</Button></TableCell>
                                        {/* <TableCell ><img src="{eachdata.image}" alt="d" srcset="" /></TableCell> */}
                                    </TableRow>


                                )
                            })
                        }

                    </TableBody>
                </Table>
                <Link to={"/bill"}><Button variant="contained" sx={{ marginTop: "30px", marginLeft: "10px" }}style={{ backgroundColor: "orange" }}>Bill</Button></Link>

            </TableContainer>
        </div>
    )
}
