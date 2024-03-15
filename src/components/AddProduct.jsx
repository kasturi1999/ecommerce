import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function AddProduct() {

  let { id } = useParams();
  // const [Id, setId] = React.useState(undefined);
  let navigate = useNavigate()

  const [data, setData] = React.useState({

    title: "",
    category: "",
    price: "",
    mrp: "",
    image: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
  };

  function handleSubmit() {

    if (id === undefined) {
      axios.post("https://65bb4da052189914b5bbad36.mockapi.io/Product", data)
        .then((res) => {
          console.log(res.data);
          navigate("/admin/products")
        });

      setData({
        title: "",
        category: "",
        price: "",
        mrp: "",
        image: ""
      })
    }
    else {
      axios.put("https://65bb4da052189914b5bbad36.mockapi.io/Product/" + id, data)
        .then((res) => {
          console.log(res.data);
          navigate("/admin/products")

        })

      setData({
        title: "",
        category: "",
        price: "",
        mrp: "",
        image: ""
      })
    }
  }

  const reloaddata = (e) => {
    // setId(Id)
    axios.get("https://65bb4da052189914b5bbad36.mockapi.io/Product/" + id)
      .then((res) => {
        console.log(res.data);
        // setData(res.data);

        setData({
          title: res.data.title,
          category: res.data.category,
          price: res.data.price,
          mrp: res.data.mrp,
          image: res.data.image
        })
      })
    // navigate("/admin/product")*************warning****************

  }

  React.useEffect(() => {
    if (id) {
      reloaddata();
    }
  }, [])



  return (
    <div>
      <div className="container">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 7 },
          }}
        >

          <TextField
            helperText="Please enter your title"
            id="title"
            value={data.title}
            label="Title"
            onChange={handleChange}

          />

          <TextField
            helperText="Please enter your category"
            id="category"
            value={data.category}
            label="Category"
            onChange={handleChange}

          />

          {/* <FormControl sx={{ m: 1, minWidth: 650 }}>
            <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="category"
              label="Category"
              onChange={handleChange}
            >
              <MenuItem >
                <em>None</em>
              </MenuItem>
              <MenuItem value={data.category}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Select your catergory</FormHelperText>
          </FormControl> */}

        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 7 },
          }}
        >
          <TextField
            helperText="Please enter your price"
            id="price"
            label="Price"
            value={data.price}
            onChange={handleChange}
          />


          <TextField
            helperText="Please enter your MRP"
            id="mrp"
            label="MRP"
            value={data.mrp}
            onChange={handleChange}
          />


          <TextField
            helperText="Please enter your image"
            id="image"
            label="Image"
            value={data.image}
            onChange={handleChange}
          />

        </Box>


        <Box
          sx={{
            width: 800,
            maxWidth: '500%',
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 7 },
          }}
        >

          <TextField fullWidth label="Description" id="description" onChange={handleChange} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 7 },
          }}
        >
          <Button variant="contained" onClick={(e) => handleSubmit(e)}>Submit</Button>

        </Box>

      </div>
    </div>
  )
}
