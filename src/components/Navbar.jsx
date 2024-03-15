import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'


export default function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  

  var count = 10
  let local = JSON.parse(localStorage.getItem("name"));
  if (local === null) {
    count = 0
    // alert(local)
  } else {
    count = local.length
  }

  React.useEffect(() => {
        
    
    }, [])



  return (
    <div>

      <AppBar position="fixed" style={{ backgroundColor: "pink" }}> 
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              About
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Product
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              
            </Button>


          </Box>
        
            {/* <AddShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }}className='text-white' /> */}

            <Box sx={{ flexGrow: 0 }}>

            {/* <Button className='me-5' variant='contained' size="small" startIcon={<ShoppingCartIcon />}>{count}</Button> */}

              <IconButton aria-label="cart" sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }} className='text-white' >
                <StyledBadge badgeContent={count} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>

            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Link to={"/login"} > <Button className='text-white'>Login</Button></Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

    </div>
  )
}
