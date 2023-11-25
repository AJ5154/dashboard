import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { purple } from "@mui/material/colors";

const SignIn = () => {
  return (
    <>
      <Container sx={{width:"60%"}} >
        <Stack spacing={2}>
          <Avatar sx={{ bgcolor: purple[500] }}>
            <LockOutlinedIcon sx={{ color: "white" }} />
          </Avatar>
          <Typography variant="h5" >Sign in</Typography>
          <TextField label="Email Address" sx={{width:"60%"}}/>
          <TextField label="Password" sx={{width:"60%"}} />
          <span>
            <Checkbox />
            Remember me
          </span>
          <Button type="submit" variant="contained" sx={{width:"60%"}}>
            Submit
          </Button>
          <span>
            <Link href="/forgotPassword">Forgot Password</Link>
            <Link href="/signup">Don't have an account? Sign Up</Link>
          </span>
        </Stack>
      </Container>
    </>
  );
};

export default SignIn;
