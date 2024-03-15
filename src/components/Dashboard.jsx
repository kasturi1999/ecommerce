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


export default function Dashboard() {

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

  return (
    <div>
      <div className="container">

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} >
            {
              newData.map((row) => {
                return (
                  <Grid item xs={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>

                      <div>
                        <CardMedia
                           sx={{ height: 360 }}
                          image={row.image}
                          title="green iguana" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {row.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {row.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          {/* <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button> */}
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
