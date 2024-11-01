import React from "react";
import {
  Button,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUpCard: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard/default");
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Get started
      </Typography>
      <Typography variant="body1" fontWeight={400} gutterBottom>
        Start creating the best possible user experience for you customers
      </Typography>
      <TextField
        label="First Name"
        variant="outlined"
        margin="normal"
        fullWidth
        defaultValue=""
      />
      <TextField
        label="Last Name"
        variant="outlined"
        margin="normal"
        fullWidth
        defaultValue=""
      />
      <TextField
        label="Email Address"
        variant="outlined"
        margin="normal"
        fullWidth
        defaultValue=""
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        type="password"
        fullWidth
        defaultValue=""
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        margin="normal"
        type="password"
        fullWidth
        defaultValue=""
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2, textTransform: "none", fontSize: "13px" }}
        onClick={handleSignIn}
      >
        Sign up
      </Button>
      <Typography variant="body2" fontWeight={400} sx={{ mt: 2 }}>
        Already have an account?
        <Link href="/auth/sign-in" underline="none">
          Sign in
        </Link>
      </Typography>
    </>
  );
};

export default SignUpCard;
