import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography
} from "@mui/material";

const SignIn = () => {
  return (
    <Grid container component="main" sx={{height:"100vh"}}>
      <CssBaseline/>
      <Grid
        xs={false}
        sm={4}
        md={7}
        sx={{
          height: "100vh",
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          
        }}
      />
      <Grid item xs={12} sm={8} md={5} maxWidth="sx">
        <Box
          sx={{
            my: 4,
            mx: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          maxWidth="sx"
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form">
            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              autoFocus
              autoComplete="email"
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
              Sign In
            </Button>
            <Grid container sx={{ mt: 1 }}>
              <Grid item xs>
                <Link href="/forgotPassword?">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href="/forgotPassword?">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
