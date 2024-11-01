import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServerPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard/default");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        width: 500,
        flexDirection: "column",
        mx: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" gutterBottom>
        500
      </Typography>
      <Typography variant="h5" gutterBottom>
        Internal server error.
      </Typography>
      <Typography variant="body2" textAlign="center" fontWeight={400} gutterBottom>
        The server encountered something unexpected that didn't allow it to
        complete the request.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2, textTransform: "none", fontSize: "13px", width: "150px" }}
        onClick={handleSignIn}
      >
        Return to website
      </Button>
    </Box>
  );
};

export default ServerPage;
