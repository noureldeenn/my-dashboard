import React from "react";
import { Box, Paper } from "@mui/material";
import ResetPasswordCard from "../components/ResetPasswordCard";

const ResetPassword: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "100px",
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: '100%',
          mx: 'auto',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: 500,
            textAlign: "center",
          }}
        >
          <ResetPasswordCard />
        </Paper>
      </Box>
    </Box>
  );
};

export default ResetPassword;
