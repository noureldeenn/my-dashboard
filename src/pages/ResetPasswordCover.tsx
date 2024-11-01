import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import backgroundImage from "../assets/signin.jpg";
import ResetPasswordCard from "../components/ResetPasswordCard";

const ResetPasswordCover: React.FC = () => {
  return (
    <Box
      sx={{
        paddingInline: "30px",
        height: "100vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <Box
            sx={{
              height: "91vh",
              width: "100%",
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              marginTop: '25px',
              justifyContent: "center",
              borderRadius: "25px",
              alignItems: "center",
              color: "#fff",
              textAlign: "center",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              width: "80%",
              flexDirection: "column",
              mx: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ResetPasswordCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResetPasswordCover;
