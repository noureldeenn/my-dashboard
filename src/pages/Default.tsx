import React from "react";
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
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Label,
} from "recharts";
import MetricCard from "../components/MetricCard";
import { green, orange, red } from "@mui/material/colors";
import { FilterList, MoreVert, Refresh } from "@mui/icons-material";
import { Stack } from "@mui/system";

const data = [
  { month: "Jan", revenue: 2000, forecast: 1000 },
  { month: "Feb", revenue: 1500, forecast: 1200 },
  { month: "Mar", revenue: 1700, forecast: 1300 },
  { month: "Apr", revenue: 1400, forecast: 1400 },
  { month: "May", revenue: 2500, forecast: 1500 },
  { month: "Jun", revenue: 3000, forecast: 1600 },
  { month: "Jul", revenue: 2800, forecast: 1700 },
  { month: "Aug", revenue: 3500, forecast: 1800 },
  { month: "Sep", revenue: 3000, forecast: 1900 },
  { month: "Oct", revenue: 3200, forecast: 2000 },
  { month: "Nov", revenue: 2800, forecast: 2100 },
  { month: "Dec", revenue: 3400, forecast: 2200 },
];

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
  { month: "May", mobile: 90, desktop: 140 },
  { month: "Jul", mobile: 70, desktop: 110 },
  { month: "Sep", mobile: 85, desktop: 150 },
  { month: "Nov", mobile: 100, desktop: 160 },
];

// Data for the projects table
const projects = [
  {
    name: "Project Aurora",
    startDate: "01/01/2023",
    endDate: "31/06/2023",
    state: "Done",
    assignee: "James Dalton",
  },
  {
    name: "Project Eagle",
    startDate: "01/01/2023",
    endDate: "31/06/2023",
    state: "In Progress",
    assignee: "Tracy Mack",
  },
  {
    name: "Project Fireball",
    startDate: "01/01/2023",
    endDate: "31/06/2023",
    state: "Done",
    assignee: "Sallie Love",
  },
  {
    name: "Project Omega",
    startDate: "01/01/2023",
    endDate: "31/06/2023",
    state: "Cancelled",
    assignee: "Glenda Jang",
  },
  {
    name: "Project Yoda",
    startDate: "01/01/2023",
    endDate: "31/06/2023",
    state: "Done",
    assignee: "Raymond Ennis",
  },
  {
    name: "Project Zulu",
    startDate: "01/01/2023",
    endDate: "31/06/2023",
    state: "Done",
    assignee: "Matthew Winters",
  },
];

const getStatusColor = (state: string) => {
  switch (state) {
    case "Done":
      return green[500];
    case "In Progress":
      return orange[500];
    case "Cancelled":
      return red[500];
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
const Default: React.FC = () => {
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
            title="Sales Today"
            value="2,532"
            period="Today"
            percentage={26}
            positive={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard
            title="Visitors"
            value="170,212"
            period="Annual"
            percentage={-14}
            positive={false}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard
            title="Total Earnings"
            value="$ 24,300"
            period="Monthly"
            percentage={18}
            positive={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard
            title="Pending Orders"
            value="45"
            period="Monthly"
            percentage={-9}
            positive={false}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mb="25px">
        <Grid item xs={12} md={6} lg={8}>
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
            <CardContent sx={{ pl: "0px" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                my="10px"
              >
                <Typography variant="h6" pl="10px">
                  Total Revenue
                </Typography>
                <IconButton aria-label="more options" aria-haspopup="true">
                  <MoreVert />
                </IconButton>
              </Stack>
              <ResponsiveContainer width="100%" height={440}>
                <LineChart data={data}>
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="month" fontSize="13px" />
                  <YAxis fontSize="13px" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="forecast"
                    stroke="#ccc"
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}  md={6} lg={4}>
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
                  Mobile / Desktop
                </Typography>
                <IconButton aria-label="more options" aria-haspopup="true">
                  <MoreVert />
                </IconButton>
              </Stack>
              <ResponsiveContainer width="100%" height={400}>
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
                    <TableCell>Name</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                    <TableCell>State</TableCell>
                    <TableCell>Assignee</TableCell>
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
                        {project.startDate}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                      >
                        {project.endDate}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "textPrimary",
                        }}
                      >
                        <Chip
                          label={project.state}
                          sx={{
                            backgroundColor: getStatusColor(project.state),
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
                        {project.assignee}
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

export default Default;
