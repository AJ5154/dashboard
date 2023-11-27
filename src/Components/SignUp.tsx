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
} from "@mui/material";
import React from "react";

const SignUp = () => {
  return (
    <Container component="main" sx={{ mt: 10 }} maxWidth="xs">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                autoComplete="userFName"
                label="First-Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                autoComplete="userLName"
                label="Last-Name"
              />
            </Grid>
          </Grid>
          <TextField
            label="Email Address"
            autoComplete="email"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            autoComplete="current-password"
            required
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
            Sign Up
          </Button>
          <Grid container sx={{ mt: 2, justifyContent: "flex-end" }}>
            <Grid item>
              <Link href="/SignIn">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
