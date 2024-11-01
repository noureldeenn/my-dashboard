import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Grid from "@mui/material/Grid";
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
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import MetricCard from "../components/MetricCard";
import { green, orange } from "@mui/material/colors";
import { FilterList, MoreVert, Refresh } from "@mui/icons-material";
import { Stack } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const weeklySales = [
  { name: "Social", value: 260, percentage: 35 },
  { name: "Search Engines", value: 125, percentage: -12 },
  { name: "Direct", value: 54, percentage: 46 },
  { name: "Other", value: 146, percentage: 24 },
];

const COLORS = ["#8884d8", "#FF8042", "#00C49F", "#FFBB28"];

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

// Data for the projects table
const projects = [
  {
    name: "Aurora",
    license: "Single License",
    technology: "React",
    tickets: "12",
    sales: "1205",
  },
  {
    name: "Canary",
    license: "Single License",
    technology: "React",
    tickets: "1",
    sales: "410",
  },
  {
    name: "Eagle",
    license: "Extended License",
    technology: "Angular",
    tickets: "2",
    sales: "108",
  },
  {
    name: "Fireball",
    license: "Single License",
    technology: "React",
    tickets: "3",
    sales: "360",
  },
  {
    name: "Omega",
    license: "Single License",
    technology: "Angular",
    tickets: "6",
    sales: "712",
  },
  {
    name: "Yoda",
    license: "Extended License",
    technology: "Angular",
    tickets: "15",
    sales: "1520",
  },
  {
    name: "Zulu",
    license: "Extended License",
    technology: "Angular",
    tickets: "2",
    sales: "480",
  },
];

const getStatusColor = (state: string) => {
  switch (state) {
    case "React":
      return green[500];
    case "Angular":
      return orange[500];
    default:
      return undefined;
  }
};
const tableData = [
  { source: "Social", revenue: 260, value: "+35%" },
  { source: "Search Engines", revenue: 125, value: "-12%" },
  { source: "Direct", revenue: 54, value: "+46%" },
  { source: "Other", revenue: 146, value: "+24%" },
];

type MarkerType = {
  name: string;
  coordinates: [number, number]; // explicitly define as a tuple
};
const markers: MarkerType[] = [
  { name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
  { name: "Denver", coordinates: [-104.9903, 39.7392] },
  { name: "Dallas", coordinates: [-96.797, 32.7767] },
  { name: "Miami", coordinates: [-80.1918, 25.7617] },
  { name: "New York", coordinates: [-74.006, 40.7128] },
];

const Sass: React.FC = () => {
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>([-97.0, 38.0]);
  const handleZoomIn = () => setZoom((prevZoom) => Math.min(prevZoom * 1.5, 8));
  const handleZoomOut = () =>
    setZoom((prevZoom) => Math.max(prevZoom / 1.5, 1));
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
            Default Dashboard
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
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard
            title="Income"
            value="$37.500"
            period="Monthly"
            percentage={14}
            positive={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard
            title="Visitors"
            value="150.121"
            period="Annual"
            percentage={-12}
            positive={false}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard
            title="Completed Orders"
            value="12.432"
            period="Weekly"
            percentage={24}
            positive={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard
            title="Pending Orders"
            value="22"
            period="Monthly"
            percentage={-6}
            positive={false}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mb="25px">
        <Grid item xs={12} md={6} lg={5}>
          <Box
            sx={[
              (theme) => ({
                position: "relative",
                width: "100%",
                margin: "auto",
                padding: 2,
                textAlign: "center",
                boxShadow: 3,
                borderRadius: 2,
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
              mb="30px"
            >
              <Typography variant="h6" pl="10px">
                Real-Time
              </Typography>
              <IconButton aria-label="more options" aria-haspopup="true">
                <MoreVert />
              </IconButton>
            </Stack>
            <Box
              sx={{
                position: "absolute",
                top: "60px",
                left: "23px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "3px"
              }}
            >
              <Button
                sx={{
                  color: "#fff",
                  backgroundColor: "#212121",
                  padding: 0,
                  width: "25px",
                  minWidth: "25px",
                }}
                onClick={handleZoomIn}
              >
                <AddIcon sx={{fontSize: '13px'}} />
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  backgroundColor: "#212121",
                  padding: 0,
                  width: "25px",
                  minWidth: "25px",
                }}
                onClick={handleZoomOut}
              >
                <RemoveIcon sx={{fontSize: '13px'}}/>
              </Button>
            </Box>
            <ComposableMap
              projection="geoAlbersUsa"
              width={500}
              height={300}
              projectionConfig={{
                scale: 1000 * zoom || 1, // Default to 1 if zoom becomes 0 or null
                center: center || [-97.0, 38.0], // Default to USA center if center is null
              }}
            >
              <Geographies geography="https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={selectedTheme === "dark" ? "gray" : "#E0E0E0"}
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                    />
                  ))
                }
              </Geographies>
              {markers.map(({ name, coordinates }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={10} fill="#0078FF" stroke="#fff" strokeWidth={2} />
                </Marker>
              ))}
            </ComposableMap>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
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
                <Typography variant="h6">
                  Mobile / Desktop
                </Typography>
                <IconButton aria-label="more options" aria-haspopup="true">
                  <MoreVert />
                </IconButton>
              </Stack>

              <ResponsiveContainer width="100%" height={245}>
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
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
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
                <Typography variant="h6">
                  Weekly Sales
                </Typography>
                <IconButton aria-label="more options" aria-haspopup="true">
                  <MoreVert />
                </IconButton>
              </Stack>
              <ResponsiveContainer width="100%" height={170}>
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
                      value="+27% more sales"
                      position="center"
                      fill={selectedTheme === "dark" ? "#fff" : "#212121"}
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

        <Grid item xs={12} lg={8}>
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
                <Typography variant="h6">
                  Latest Projects
                </Typography>
                <IconButton aria-label="more options" aria-haspopup="true">
                  <MoreVert />
                </IconButton>
              </Stack>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>License Type</TableCell>
                    <TableCell>Technology</TableCell>
                    <TableCell>Open Tickets</TableCell>
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
                        {project.license}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                      >
                        <Chip
                          label={project.technology}
                          sx={{
                            backgroundColor: getStatusColor(project.technology),
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
                        {project.tickets}
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

export default Sass;
