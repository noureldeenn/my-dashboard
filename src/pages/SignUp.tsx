import React from "react";
import { Box, Paper } from "@mui/material";
import SignUpCard from "../components/SignUpCard";

const SignUp: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f4f6f8",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            paddingInline: 4,
            paddingBlock: 2,
            width: 500,
            textAlign: "center",
          }}
        >
          <SignUpCard />
        </Paper>
      </Box>
    </Box>
  );
};

export default SignUp;
