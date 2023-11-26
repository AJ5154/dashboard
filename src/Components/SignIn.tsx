import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  TypographyProps,
} from "@mui/material";

const CopyRights = (props: TypographyProps) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center" {...props}>
      &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
    </Typography>
  );
};

const SignIn = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            required
            autoFocus
            label="Email Address"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            fullWidth
            required
            type="password"
            label="Password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Sign In
          </Button>

          <Grid container sx={{ mt: 1.5 }}>
            <Grid item xs>
              <Link href="/forgotPassword?" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signin" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CopyRights sx={{ mt: 4 }} />
    </Container>
  );
};

export default SignIn;
