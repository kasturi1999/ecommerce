import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



export default function Products() {

    let navigate = useNavigate();
    
    const [newData, setNewData] = React.useState([]);
    const [Id, setId] = React.useState(undefined);
    const[data, setData] = React.useState([]);


    function getdata() {
        axios.get("https://65bb4da052189914b5bbad36.mockapi.io/Product")
            .then((res) => {
                console.log(res.data);
                setNewData(res.data)
            })
    }

    React.useEffect(() => {
        getdata();
    }, [])

    // function handleUpdate(id){
    //     e.preventDefault();
        
    //     console.log(id);

    //         navigate("/admin/product/" + id)
    // }

    function handleDelete(e, id) {
        e.preventDefault();
    
        axios.delete("https://65bb4da052189914b5bbad36.mockapi.io/Product/" + id)
            .then((res) => {
                console.log(res.data);
                getdata();
            })
    };

    return (
        <div>
            <TableContainer>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>MRP</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            newData.map((row, i) => {
                                return (

                                    <TableRow
                                        key={i}
                                        // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell style={{textAlign:'center'}} component="th" scope="row">
                                            {i + 1}
                                        </TableCell>
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell>{row.category}</TableCell>
                                        <TableCell>{row.price}</TableCell>
                                        <TableCell>{row.mrp}</TableCell>
                                        <TableCell><img src={row.image} alt=""style={{ width: "90px" }}  /></TableCell>
                                        <TableCell>
                                            <Link to={'/admin/product/'+ row.id}>
                                            <button  variant="contained" className='btn btn-primary'>Edit</button>
                                            </Link>
                                            <button  variant="contained" onClick={(e) => handleDelete(e, row.id)}  className='btn btn-danger m-2'>Delete</button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
