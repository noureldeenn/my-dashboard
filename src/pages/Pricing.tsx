import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import { StarBorder } from "@mui/icons-material";

const Pricing: React.FC = () => {
  return (
    <Box mx="150px" my="20px">
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
            Pricing
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" href="/pages/profile" color="info">
              Pages
            </Link>
            <Link
              underline="none"
              href="/pages/pricing"
              aria-current="page"
              color="info"
            >
              Profile
            </Link>
          </Breadcrumbs>
        </Box>
      </Box>
      <Stack display="flex" alignItems="center" gap={1}>
        <Typography
          variant="h4"
          mt="20px"
          sx={[
            (theme) => ({
              color: "#212121",
              ...theme.applyStyles("dark", {
                color: "#fff",
              }),
            }),
          ]}
        >
          We have a plan for everyone
        </Typography>
        <Typography variant="body1" fontWeight="400">
          Whether you're a business or an individual, 14-day trial no credit
          card required.
        </Typography>
      </Stack>
      <Grid container spacing={2} my="30px" alignItems="end">
        <Grid item xs={12} md={6} lg={4}>
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
              <Typography variant="h5" fontWeight="400" textAlign="center">
                Free
              </Typography>
              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                justifyContent="center"
                width="100%"
                my={2}
              >
                <Typography variant="h2" textAlign="center">
                  $0
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="center"
                  color="textSecondary"
                >
                  /mo
                </Typography>
              </Stack>
              <Typography variant="body1" textAlign="center">
                10 users included
              </Typography>
              <Typography variant="body1" textAlign="center">
                2 GB of storage
              </Typography>
              <Typography variant="body1" textAlign="center">
                Help center access
              </Typography>
              <Typography variant="body1" textAlign="center">
                Email support
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{ fontSize: "13px", mt: "20px" }}
              >
                Sign up for free
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={[
              (theme) => ({
                mb: "25px",
                pt: "25px",
                backgroundColor: "#fff",
                ...theme.applyStyles("dark", {
                  backgroundColor: theme.palette.secondary.main,
                }),
              }),
            ]}
          >
            <CardContent>
              <Stack
                display="flex"
                direction="row"
                alignItems="flex-start"
                justifyContent="end"
                width="100%"
                gap={9}
                mb={1}
              >
                <Typography variant="h5" fontWeight="400" textAlign="center">
                  Free
                </Typography>
                <StarBorder />
              </Stack>
              <Typography
                variant="body2"
                fontWeight="400"
                textAlign="center"
                color="textSecondary"
              >
                Most popular
              </Typography>
              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                justifyContent="center"
                width="100%"
                my={2}
              >
                <Typography variant="h2" textAlign="center">
                  $15
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="center"
                  color="textSecondary"
                >
                  /mo
                </Typography>
              </Stack>
              <Typography variant="body1" textAlign="center">
                20 users included
              </Typography>
              <Typography variant="body1" textAlign="center">
                10 GB of storage
              </Typography>
              <Typography variant="body1" textAlign="center">
                Help center access
              </Typography>
              <Typography variant="body1" textAlign="center">
                Priority email support
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ fontSize: "13px", mt: "20px" }}
              >
                Get started
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
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
              <Typography variant="h5" fontWeight="400" textAlign="center">
                Enterprise
              </Typography>
              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                justifyContent="center"
                width="100%"
                my={2}
              >
                <Typography variant="h2" textAlign="center">
                  $30
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="center"
                  color="textSecondary"
                >
                  /mo
                </Typography>
              </Stack>
              <Typography variant="body1" textAlign="center">
                50 users included
              </Typography>
              <Typography variant="body1" textAlign="center">
                30 GB of storage
              </Typography>
              <Typography variant="body1" textAlign="center">
                Help center access
              </Typography>
              <Typography variant="body1" textAlign="center">
                Phone & email support
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{ fontSize: "13px", mt: "20px" }}
              >
                Contact us
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pricing;
