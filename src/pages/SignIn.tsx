import React from "react";
import { Box,  Paper, } from "@mui/material";
import SignInCard from "../components/SignInCard";

const SignIn: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "100px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f4f6f8",
        }}
      >
        <Paper
          elevation={3}
          sx={{ padding: 2, maxWidth: 600, width: "100%", textAlign: "center" }}
        >
          <SignInCard />
        </Paper>
      </Box>
    </Box>
  );
};

export default SignIn;
