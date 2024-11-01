import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Avatar,
  Link,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.jpg";

const SignInCard: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard/default");
  };

  return (
    <>
      <Avatar
        alt="User Avatar"
        src={background}
        sx={{ width: 100, height: 100, mb: "20px", mx:'auto' }}
      />
      <Typography variant="h4" gutterBottom>
        Welcome back, Lucy!
      </Typography>
      <Typography variant="body2" fontWeight={400} gutterBottom>
        Sign in to your account to continue
      </Typography>
      <Alert severity="info" sx={{ mb: 2 }}>
        <Typography variant="body2" fontWeight={400} gutterBottom>
          Use <strong>demo@bootlab.io</strong> and{" "}
          <strong>unsafepassword</strong> to sign in
        </Typography>
      </Alert>
      <TextField
        label="Email Address"
        variant="outlined"
        margin="normal"
        fullWidth
        defaultValue="demo@bootlab.io"
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        type="password"
        fullWidth
        defaultValue="unsafepassword"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mt: 2,
        }}
      >
        <Link
          href="/auth/reset-password"
          variant="body2"
          fontWeight={400}
          underline="none"
        >
          Forgot password?
        </Link>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2, textTransform: "none", fontSize: "13px" }}
        onClick={handleSignIn}
      >
        Sign in
      </Button>
      <Typography variant="body2" fontWeight={400} sx={{ mt: 2 }}>
        Don’t have an account yet?{" "}
        <Link href="/auth/sign-up" underline="none">
          Sign up
        </Link>
      </Typography>
    </>
  );
};

export default SignInCard;
