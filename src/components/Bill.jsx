import React, { useEffect, useRef, useState } from 'react'
import { Container, Paper, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Box, Button } from '@mui/material';
import axios from 'axios';
import { useReactToPrint } from "react-to-print";


export default function Bill() {

  const [bill, setBill] = useState([]);

  function gettingData() {
    axios.get("https://65bb4da052189914b5bbad36.mockapi.io/Ordertale")
      .then((res) => {
        console.log(res.data);
        setBill(res.data)
      })
  }
  useEffect(() => {
    gettingData();
  }, [])

  const getTotal = () =>{
    return bill.reduce((total, eachdat)=> total + eachdat.quantity * eachdat.price, 0);
  }

  let customerName = localStorage.getItem("username");
  let currentDate = new Date().toJSON().slice(0, 10);

  const componentPDF = useRef();


    const generatePdf = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "bill",
        onafterprint: () => alert("Data saved in pdf")


    });

  return (
    <div>
      <Container style={{ marginTop: "20px" }}>

        <Paper elevation={3} className="bill-container">
          <h2 className='text-center text-decoration-underline'>Invoice Form </h2>
          <div  ref={componentPDF} style={{ width: "100%" }}>

            <Typography>
              <Box>
                <b className='text-decoration-underline fs-5' style={{ marginLeft: "20px" }}>Customer Name: </b> <b>{customerName}</b><br /><br />
                <b className='text-decoration-underline fs-5' style={{ marginLeft: "20px" }}>Date:</b>  <b>{currentDate} </b>

              </Box>

            </Typography>

            <hr />
            <TableContainer component={Paper} >
              <Table >
                <TableHead>
                  <TableRow >
                    <TableCell >Sr.No</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    bill.map((eachdat, i) => (
                      <TableRow key={i}>
                        <TableCell>{i + 1}</TableCell>
                        <TableCell>{eachdat.title}</TableCell>
                        <TableCell>{eachdat.price}Rs.</TableCell>
                        <TableCell>{eachdat.quantity}</TableCell>
                        <TableCell>{eachdat.subtotal}Rs.</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>



            <Typography variant="h6" style={{ marginTop: '20px', marginLeft: "20px" }} className='d-flex justify-content-between'>
              Total:{getTotal()}.Rs

            </Typography>
          </div><br />
          <Button variant='contained' color='primary' style={{ marginBottom: "40px", marginLeft: "20px" }} onClick={generatePdf}>Print</Button>



        </Paper>
      </Container >
    </div>
  )
}
