import React from "react";
import {
  Button,
  IconButton,
  Typography,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  LinearProgress,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Label,
} from "recharts";
import { RootState } from "../store";
import { FilterList, MoreVert, Refresh } from "@mui/icons-material";
import MetricCard from "../components/MetricCard";
import { green, red } from "@mui/material/colors";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const blueCircleIcon = new L.DivIcon({
  html: `<div style="background-color: #007bff; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>`,
  className: "", // Clear default class
  iconSize: [16, 16],
  iconAnchor: [8, 8], // Center the icon
});

const locations = [
  { lat: 40.7128, lng: -74.006 }, // New York
  { lat: 34.0522, lng: -118.2437 }, // Los Angeles
  { lat: 51.5074, lng: -0.1278 }, // London
  { lat: 55.7558, lng: 37.6173 }, // Moscow
  { lat: 35.6895, lng: 139.6917 }, // Tokyo
  { lat: 39.9042, lng: 116.4074 }, // Beijing
];

const barData = [
  { month: "Jan", mobile: 60, desktop: 120 },
  { month: "Feb", mobile: 50, desktop: 100 },
  { month: "Mar", mobile: 80, desktop: 130 },
  { month: "Apr", mobile: 80, desktop: 140 },
  { month: "May", mobile: 90, desktop: 140 },
  { month: "Jul", mobile: 70, desktop: 110 },
  { month: "Jun", mobile: 80, desktop: 150 },
  { month: "Aug", mobile: 80, desktop: 120 },
  { month: "Sep", mobile: 85, desktop: 150 },
  { month: "Oct", mobile: 85, desktop: 150 },
  { month: "Nov", mobile: 100, desktop: 160 },
  { month: "Dec", mobile: 85, desktop: 150 },
];

const weeklySales = [
  { name: "Social", value: 260, percentage: 35 },
  { name: "Search Engines", value: 125, percentage: -12 },
  { name: "Direct", value: 54, percentage: 46 },
];

const COLORS = ["#8884d8", "#FF8042", "#00C49F"];
const tableData = [
  { source: "Social", revenue: 260, value: "+35%" },
  { source: "Search Engines", revenue: 125, value: "-12%" },
  { source: "Direct", revenue: 54, value: "+46%" },
];

const languagesData = [
  { language: "en-us", users: 850, percentage: 70 },
  { language: "en-gb", users: 450, percentage: 65 },
  { language: "fr-fr", users: 220, percentage: 46 },
  { language: "es-es", users: 162, percentage: 36 },
  { language: "de-de", users: 120, percentage: 23 },
  { language: "ru-ru", users: 80, percentage: 22 },
];

const projects = [
  {
    source: "Google",
    users: "1023",
    sessions: "1265",
    bounce: "30%",
    avg: "00:06:25",
  },
  {
    source: "Direct",
    users: "824",
    sessions: "1583",
    bounce: "69%",
    avg: "00:09:18",
  },
  {
    source: "X",
    users: "256",
    sessions: "5656",
    bounce: "23%",
    avg: "00:05:16",
  },
  {
    source: "GitHub	",
    users: "555",
    sessions: "5466",
    bounce: "38%",
    avg: "00:06:38",
  },
  {
    source: "DuckDuckGo",
    users: "555",
    sessions: "666",
    bounce: "56%",
    avg: "00:07:19",
  },
  {
    source: "Facebook",
    users: "856",
    sessions: "1200",
    bounce: "48%",
    avg: "00:09:18",
  },
];
const getStatusColor = (state: string) => {
  const num = Number(state.replace("%", ""));
  if (num > 50) {
    return green[500];
  } else return red[500];
};

const Analytics: React.FC = () => {
  const selectedTheme = useSelector(
    (state: RootState) => state.theme.selectedTheme
  );
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
            Analytics Dashboard
          </Typography>
          <Typography
            variant="body1"
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
            Welcome back, Lucy! We’ve missed you.
            <span role="img" aria-label="wave">
              👋
            </span>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="8px">
          <IconButton color="primary">
            <Refresh />
          </IconButton>
          <IconButton color="primary">
            <FilterList />
          </IconButton>
          <Button variant="contained" color="primary" sx={{ fontSize: "12px" }}>
            Today: April 29
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2} mb="25px">
        <Grid item container xs={12} spacing={2} lg={5}>
          <Grid item xs={12} md={6}>
            <MetricCard
              title="Tody Visitors"
              value="24.532"
              period="Today"
              text="Since last week"
              percentage={14}
              positive={true}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MetricCard
              title="Activity"
              value="63.200"
              period="Annual"
              text="Since last week"
              percentage={-12}
              positive={false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MetricCard
              title="Real-Time"
              value="1.320"
              period="Monthly"
              text="Since last week"
              percentage={-18}
              positive={false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MetricCard
              title="Bounce"
              value="12.364"
              period="Yearly"
              text="Since last week"
              percentage={27}
              positive={true}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Card
            sx={[
              (theme) => ({
                backgroundColor: "#fff",
                ...theme.applyStyles("dark", {
                  backgroundColor: theme.palette.secondary.main,
                }),
              }),
            ]}
          >
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                my="10px"
              >
                <Typography variant="h6">Mobile / Desktop</Typography>
                <IconButton aria-label="more options" aria-haspopup="true">
                  <MoreVert />
                </IconButton>
              </Stack>

              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={barData}>
                  <XAxis fontSize="13px" dataKey="month" />
                  <YAxis fontSize="13px" />
                  <Tooltip />
                  <Bar
                    dataKey="mobile"
                    barSize={7}
                    stackId="a"
                    fill="#4782da"
                  />
                  <Bar
                    dataKey="desktop"
                    barSize={7}
                    stackId="a"
                    fill="#c2d6f3"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} mb="25px">
        <Grid item xs={12} md={6} lg={8}>
          <Box
            sx={[
              (theme) => ({
                width: "100%",
                height: "450px",
                borderRadius: "8px",
                boxShadow: 3,
                backgroundColor: "#fff",
                ...theme.applyStyles("dark", {
                  backgroundColor: theme.palette.secondary.main,
                }),
              }),
            ]}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              my="10px"
            >
              <Typography variant="h6" pl="10px">
                Real-Time
              </Typography>
              <IconButton aria-label="more options" aria-haspopup="true">
                <MoreVert />
              </IconButton>
            </Stack>

            <MapContainer
              center={[20, 0]}
              zoom={2}
              minZoom={1}
              maxZoom={4}
              style={{ height: "450px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((position, index) => (
                <Marker
                  key={index}
                  position={[position.lat, position.lng]}
                  icon={blueCircleIcon}
                />
              ))}
            </MapContainer>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={[
              (theme) => ({
                backgroundColor: "#fff",
                ...theme.applyStyles("dark", {
                  backgroundColor: theme.palette.secondary.main,
                }),
              }),
            ]}
          >
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                my="10px"
              >
                <Typography variant="h6">Source / Medium</Typography>
                <IconButton aria-label="more options" aria-haspopup="true">
                  <MoreVert />
                </IconButton>
              </Stack>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={weeklySales}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={65}
                    fill="#8884d8"
                  >
                    {weeklySales.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                    <Label
                      value="+23% new visitors"
                      position="center"
                      fill={selectedTheme === "dark" ? "#fff" : "black"}
                      style={{ fontSize: "12px", fontWeight: "bold" }}
                    />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Source</TableCell>
                    <TableCell align="right">Revenue</TableCell>
                    <TableCell align="right">Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.source}>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                        component="th"
                        scope="row"
                      >
                        {row.source}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                        align="right"
                      >
                        {row.revenue}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: row.value.includes("+") ? "green" : "red",
                        }}
                      >
                        {row.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} mb="25px">
        <Grid item xs={12} lg={5}>
          <Card
            sx={[
              (theme) => ({
                height: "500px",
                backgroundColor: "#fff",
                ...theme.applyStyles("dark", {
                  backgroundColor: theme.palette.secondary.main,
                }),
              }),
            ]}
          >
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                my="10px"
              >
                <Typography variant="h6">Languages</Typography>
                <IconButton aria-label="more options" aria-haspopup="true">
                  <MoreVert />
                </IconButton>
              </Stack>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Languages</TableCell>
                    <TableCell align="right">Users</TableCell>
                    <TableCell align="right">% Users</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {languagesData.map((row) => (
                    <TableRow key={row.language}>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                        component="th"
                        scope="row"
                      >
                        {row.language}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                        align="right"
                      >
                        {row.users}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        <Box sx={{ width: "100%" }}>
                          <LinearProgress
                            sx={{ width: "200px" }}
                            variant="determinate"
                            value={row.percentage}
                          />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Card
            sx={[
              (theme) => ({
                backgroundColor: "#fff",
                ...theme.applyStyles("dark", {
                  backgroundColor: theme.palette.secondary.main,
                }),
              }),
            ]}
          >
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                my="10px"
              >
                <Typography variant="h6">Traffic sources</Typography>
                <IconButton aria-label="more options" aria-haspopup="true">
                  <MoreVert />
                </IconButton>
              </Stack>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Source</TableCell>
                    <TableCell>Users</TableCell>
                    <TableCell>Sessions</TableCell>
                    <TableCell>Bounce Rate </TableCell>
                    <TableCell>Avg. Session Duration</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.source}>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                      >
                        {project.source}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                      >
                        {project.users}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                      >
                        {project.sessions}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                      >
                        <Chip
                          label={project.bounce}
                          sx={{
                            backgroundColor: getStatusColor(project.bounce),
                            color: "#fff",
                          }}
                          size="small"
                        />
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                      >
                        {project.avg}
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

export default Analytics;
