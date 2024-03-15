import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { Link } from 'react-router-dom';




export default function Product() {

    const [newData, setNewData] = React.useState([]);

    function getData() {
        axios.get("https://65bb4da052189914b5bbad36.mockapi.io/Product")
            .then((res) => {
                console.log(res.data);
                setNewData(res.data)
            })
    }

    React.useEffect(() => {
        getData()
    }, [])

    function add(row) {

        console.log(row);
            // localStorage.setItem("name", JSON.stringify([row]));

        var existingData = localStorage.getItem("name");

        if(existingData){
            existingData = JSON.parse(existingData);
            existingData.push(row);
            localStorage.setItem("name",JSON.stringify(existingData));
        }
        else{

            localStorage.setItem("name", JSON.stringify([row]));
        }
        console.log(JSON.parse(localStorage.getItem("name")));

    }

    // React.useEffect(() => {
    //     add()
    // }, [])


    return (
        <div>
            <div className="container">

                <h1 style={{ textAlign: 'center' }}>Products</h1><br />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        {
                            newData.map((row,i) => {
                                return (
                                    <Grid item xs={6} md={4} key={i}>
                                        <Card sx={{ maxWidth: 345 }}>

                                            <div>
                                                <CardMedia
                                                    sx={{ height: 360 }}
                                                    image={row.image}
                                                    title="green iguana" />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }} >
                                                        {row.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.dark" style={{ textAlign: "center" }} >
                                                    Price ={row.price}/-
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button variant='contained' size="small" color='warning' sx={{ marginLeft: "70px" }} onClick={((e) => add(row))}>Add to Card</Button>
                                                    <Link to={'/BuyNow/' +row.id}>
                                                    <Button variant='contained' size="small" color='success' sx={{ marginLeft: "0px" }}>Buy now</Button>
                                                    </Link>
                                                </CardActions>
                                            </div>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Box>
            </div>
        </div>
    )
}
