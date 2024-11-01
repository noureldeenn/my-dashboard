import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Link,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import background from "../assets/background.jpg";
import React from "react";
import Grid from "@mui/material/Grid";
import {
  Home,
  Work,
  LocationOn,
  OpenInNew,
  Facebook,
  Instagram,
  LocalMall,
} from "@mui/icons-material";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { blue, green, grey, red } from "@mui/material/colors";
import { Stack } from "@mui/system";

const barData = [
  { month: "Jan", sales: 60, revenue: 120 },
  { month: "Feb", sales: 50, revenue: 100 },
  { month: "Mar", sales: 80, revenue: 130 },
  { month: "Apr", sales: 80, revenue: 140 },
  { month: "May", sales: 70, revenue: 140 },
  { month: "Jul", sales: 70, revenue: 110 },
  { month: "Jun", sales: 40, revenue: 150 },
  { month: "Aug", sales: 30, revenue: 120 },
  { month: "Sep", sales: 20, revenue: 150 },
  { month: "Oct", sales: 10, revenue: 150 },
  { month: "Nov", sales: 0, revenue: 160 },
  { month: "Dec", sales: 85, revenue: 150 },
];

const projects = [
  {
    name: "AppStack",
    license: "Single License",
    Tech: "HTML",
    sales: "1205",
  },
  {
    name: "Mira",
    license: "Single License",
    Tech: "React",
    sales: "410",
  },
  {
    name: "Milo",
    license: "Single License",
    Tech: "HTML",
    sales: "108",
  },
  {
    name: "Robust UI Kit",
    license: "Single License",
    Tech: "Angular",
    sales: "360",
  },
  {
    name: "Spark",
    license: "Single License",
    Tech: "React",
    sales: "712",
  },
];

const getStatusColor = (state: string) => {
  switch (state) {
    case "React":
      return green[500];
    case "Angular":
      return red[500];
    case "HTML":
      return blue[500];
    default:
      return undefined;
  }
};

const Profile: React.FC = () => {
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
            Profile
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" href="/pages/profile" color="info">
              Pages
            </Link>
            <Link
              underline="none"
              href="/pages/profile"
              aria-current="page"
              color="info"
            >
              Profile
            </Link>
          </Breadcrumbs>
        </Box>
      </Box>
      <Grid container spacing={2} mb="25px">
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box>
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
                <Typography variant="h6">Profile Details</Typography>
                <Avatar
                  alt="User Avatar"
                  src={background}
                  sx={{ width: 120, height: 120, mx: "auto", my: 2 }}
                />
                <Typography
                  variant="body1"
                  textAlign="center"
                  color="text.secondary"
                  fontWeight="400"
                >
                  Nour Badr
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="center"
                  color="text.secondary"
                  fontWeight="400"
                >
                  Lead Developer
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mt: 1,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ fontSize: "11px" }}
                  >
                    Follow
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ fontSize: "11px" }}
                  >
                    Message
                  </Button>
                </Box>
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
                <Typography variant="h6">Skills</Typography>

                <Box
                  sx={{
                    mt: "20px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  {[
                    "HTML",
                    "JavaScript",
                    "Sass",
                    "React",
                    "Redux",
                    "Next.js",
                    "Material UI",
                    "UI",
                    "UX",
                  ].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={[
                        (theme) => ({
                          color: skill === "HTML" ? "#fff" : "text.primary",
                          backgroundColor:
                            skill === "HTML"
                              ? theme.palette.primary.main
                              : grey[100],
                          fontSize: "11px",
                          fontWeight: "400",
                          ...theme.applyStyles("dark", {
                            backgroundColor:
                              skill === "HTML"
                                ? theme.palette.primary.main
                                : grey[700],
                          }),
                        }),
                      ]}
                      variant={skill === "HTML" ? "filled" : "outlined"}
                    />
                  ))}
                </Box>
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
                <Typography variant="h6">About</Typography>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Home fontSize="small" sx={{ mr: 1 }} />
                  <Stack
                    display="flex"
                    direction="row"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography
                      variant="body2"
                      fontWeight="400"
                      color="textSecondary"
                    >
                      Lives in
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="400"
                      sx={[
                        (theme) => ({
                          color: theme.palette.primary.main,
                        }),
                      ]}
                    >
                      San Francisco, SA
                    </Typography>
                  </Stack>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Work fontSize="small" sx={{ mr: 1 }} />
                  <Stack
                    display="flex"
                    direction="row"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography
                      variant="body2"
                      fontWeight="400"
                      color="textSecondary"
                    >
                      Works at
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="400"
                      sx={[
                        (theme) => ({
                          color: theme.palette.primary.main,
                        }),
                      ]}
                    >
                      Material UI
                    </Typography>
                  </Stack>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOn fontSize="small" sx={{ mr: 1 }} />
                  <Stack
                    display="flex"
                    direction="row"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography
                      variant="body2"
                      fontWeight="400"
                      color="textSecondary"
                    >
                      Lives in
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="400"
                      sx={[
                        (theme) => ({
                          color: theme.palette.primary.main,
                        }),
                      ]}
                    >
                      Boston
                    </Typography>
                  </Stack>
                </Box>
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
                <Typography variant="h6">Elsewhere</Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <OpenInNew fontSize="small" sx={{ mr: 1 }} />
                    <Typography
                      variant="body2"
                      fontWeight="400"
                      sx={[
                        (theme) => ({
                          color: theme.palette.primary.main,
                        }),
                      ]}
                    >
                      lucylavender.io
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Facebook fontSize="small" sx={{ mr: 1 }} />
                    <Typography
                      variant="body2"
                      fontWeight="400"
                      sx={[
                        (theme) => ({
                          color: theme.palette.primary.main,
                        }),
                      ]}
                    >
                      Facebook
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Instagram fontSize="small" sx={{ mr: 1 }} />
                    <Typography
                      variant="body2"
                      fontWeight="400"
                      sx={[
                        (theme) => ({
                          color: theme.palette.primary.main,
                        }),
                      ]}
                    >
                      Instagram
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={8}>
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
              <Typography variant="h6">Sales / Revenue</Typography>

              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={barData}>
                  <XAxis fontSize="13px" dataKey="month" />
                  <YAxis fontSize="13px" />
                  <Tooltip />
                  <Bar dataKey="sales" barSize={7} fill="#4782da" />
                  <Bar dataKey="revenue" barSize={7} fill="#c2d6f3" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Grid container spacing={2} mb="25px">
            <Grid item xs={12} lg={4}>
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
                  <Stack
                    display="flex"
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box mb="10px">
                      <Typography variant="h2" fontWeight="400" mb="5px">
                        $ 2.405
                      </Typography>
                      <Typography variant="body2" fontWeight="400">
                        Total Earnings
                      </Typography>
                    </Box>
                    <Typography
                      variant="h2"
                      fontWeight="400"
                      sx={[
                        (theme) => ({
                          color: theme.palette.primary.main,
                        }),
                      ]}
                    >
                      $
                    </Typography>
                  </Stack>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      sx={{ width: "100%" }}
                      variant="determinate"
                      value={70}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
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
                  <Stack
                    display="flex"
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box mb="10px">
                      <Typography variant="h2" fontWeight="400" mb="5px">
                        30
                      </Typography>
                      <Typography variant="body2" fontWeight="400">
                        Orders Today
                      </Typography>
                    </Box>
                    <Typography
                      variant="h2"
                      fontWeight="400"
                      sx={[
                        (theme) => ({
                          color: theme.palette.primary.main,
                        }),
                      ]}
                    >
                      <LocalMall />
                    </Typography>
                  </Stack>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      sx={{ width: "100%" }}
                      variant="determinate"
                      value={30}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
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
                  <Stack
                    display="flex"
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box mb="10px">
                      <Typography variant="h2" fontWeight="400" mb="5px">
                        $ 1.224
                      </Typography>
                      <Typography variant="body2" fontWeight="400">
                        Total Revenue
                      </Typography>
                    </Box>
                    <Typography
                      variant="h2"
                      fontWeight="400"
                      sx={[
                        (theme) => ({
                          color: theme.palette.primary.main,
                        }),
                      ]}
                    >
                      $
                    </Typography>
                  </Stack>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      sx={{ width: "100%" }}
                      variant="determinate"
                      value={70}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Card
            sx={[
              (theme) => ({
                overflowX:'scroll',
                backgroundColor: "#fff",
                ...theme.applyStyles("dark", {
                  backgroundColor: theme.palette.secondary.main,
                }),
              }),
            ]}
          >
            <CardContent>
              <Typography variant="h6"> Projects</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Tec</TableCell>
                    <TableCell>License Type</TableCell>
                    <TableCell>Sales</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.name}>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                      >
                        {project.name}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                      >
                        {project.Tech}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                      >
                        <Chip
                          label={project.Tech}
                          sx={{
                            backgroundColor: getStatusColor(project.Tech),
                            color: "#fff",
                          }}
                          size="small"
                        />
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                      >
                        {project.sales}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
