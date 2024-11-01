import React from "react";
import {
  Button,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ResetPasswordCard: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard/default");
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Reset Password
      </Typography>
      <Typography variant="body1" fontWeight={400} gutterBottom>
        Enter your email to reset your password
      </Typography>
      <TextField
        label="Email Address"
        variant="outlined"
        margin="normal"
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
        Reset password
      </Button>
      <Typography variant="body2" fontWeight={400} sx={{ mt: 2 }}>
        Don't have an account?
        <Link href="/auth/sign-in" underline="none">
          Sign up
        </Link>
      </Typography>
    </>
  );
};

export default ResetPasswordCard;
