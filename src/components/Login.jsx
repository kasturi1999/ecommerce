import  { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>

    </Typography>
  );
}


const defaultTheme = createTheme();

export default function Login() {
  let navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    e.preventDefault();
    setData({ ...data, [e.target.id]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(data);

    if (data.email === "admin" && data.password === "admin") {

      // console.log(data);
      setData({
        email: "",
        password: ""
      })

      let Credential = JSON.stringify(data)
      localStorage.setItem("data", Credential);

      navigate("/admin")
      window.location.reload();
    } else {
      alert("Invalid Credentical ");
    }
  }


  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box component="form" noValidate sx={{ mt: 1 }}>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={data.email}
                onChange={(e) => handleChange(e)}
                autoComplete="email"

                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={data.password}
                onChange={(e) => handleChange(e)}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember"  />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2}}
                style={{background:"purple"}}   
                onClick={(e) => handleSubmit(e)}
              >
                Sign In

              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  )
}
