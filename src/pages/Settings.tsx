import React from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Avatar,
  Breadcrumbs,
  Link,
  CardContent,
  Card,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Stack } from "@mui/system";

const Settings: React.FC = () => {
  return (
    <Box mx="50px" my="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="16px"
        mb="25px"
        borderBottom="1px solid  #e0e0e0"
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight="400"
            sx={[
              (theme) => ({
                color: "#212121",
                ...theme.applyStyles("dark", {
                  color: "#fff",
                }),
              }),
            ]}
          >
            Settings
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" href="/pages/profile" color="info">
              Pages
            </Link>
            <Link
              underline="none"
              href="/pages/Settings"
              aria-current="page"
              color="info"
            >
              Profile
            </Link>
          </Breadcrumbs>
        </Box>
      </Box>

      <Card
        sx={[
          (theme) => ({
            mb: "25px",
            backgroundColor: "#fff",
            ...theme.applyStyles("dark", {
              backgroundColor: theme.palette.secondary.main,
            }),
          }),
        ]}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="400">
            Public info
          </Typography>
          <Stack display="flex" direction="row" justifyContent="space-between">
            <Grid container spacing={2} mb="25px">
              <Grid item xs={12} sm={6} md={8}>
                <Box mb={2}>
                  <TextField
                    label="Username"
                    fullWidth
                    id="outlined"
                    margin="normal"
                    defaultValue="Nour Badr"
                  />
                  <TextField
                    label="Biography"
                    id="outlined"
                    fullWidth
                    defaultValue="Lucy is a Freelance Writer and Social Media Manager who helps finance professionals and Fin-tech startups build an audience and get more paying clients online."
                    margin="normal"
                    multiline
                    rows={2}
                  />
                </Box>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ fontSize: "12px" }}
                >
                  Save Changes
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Stack display="flex" alignItems="center">
                  <Avatar
                    src="/path-to-your-image.jpg"
                    sx={{ width: 120, height: 120, mr: 2, mb: 2 }}
                  />
                  <Button
                    variant="contained"
                    component="label"
                    startIcon={<PhotoCamera />}
                    sx={{ fontSize: "12px" }}
                  >
                    Upload
                    <input hidden accept="image/*" type="file" />
                  </Button>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    textAlign="center"
                  >
                    For best results, use an image at least 128px by 128px in
                    .jpg format
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>

      <Card
        sx={[
          (theme) => ({
            mb: "25px",
            backgroundColor: "#fff",
            ...theme.applyStyles("dark", {
              backgroundColor: theme.palette.secondary.main,
            }),
          }),
        ]}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="400">
            Private info
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First name"
                variant="outlined"
                fullWidth
                id="outlined"
                margin="normal"
                defaultValue="Nour"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last name"
                variant="outlined"
                fullWidth
                id="outlined"
                margin="normal"
                defaultValue="Badr"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                id="outlined"
                margin="normal"
                defaultValue="lucylavender@gmail.com"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                id="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Apartment, studio, or floor"
                variant="outlined"
                fullWidth
                id="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField label="City" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField label="State" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField label="Zip" variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontSize: "12px" }}
            >
              Save changes
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;
