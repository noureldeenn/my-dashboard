import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Chip,
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  TablePagination,
  Checkbox,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import EnhancedTableToolbar from "../components/EnhancedTableToolbar";
import { Order, OrdersData } from "../types/dataTypes";
import { CloudDownload, Visibility } from "@mui/icons-material";
import { green, orange, red } from "@mui/material/colors";
import OrdersTableHead from "../components/ordersTableHead";


function createData(
  id: number,
  product: string,
  date: string,
  total: number,
  status: string,
  payment: string,
  action: string
): OrdersData {
  return {
    id,
    product,
    date,
    total,
    status,
    payment,
    action,
  };
}

const orders = [
  createData(
    253,
    "Salt & Pepper Grinder",
    "2023-01-02",
    32,
    "Shipped",
    "Visa",
    "actions"
  ),
  createData(
    254,
    "Salt & Pepper Grinder",
    "2023-01-02",
    130,
    "Shipped",
    "PayPal",
    "actions"
  ),
  createData(
    255,
    "Pocket Speaker",
    "2023-01-04",
    8,
    "Cancelled",
    "Mastercard",
    "actions"
  ),
  createData(
    235,
    "Frozen yoghurt",
    "2023-01-02",
    12,
    "Cancelled",
    "PayPal",
    "actions"
  ),
  createData(
    256,
    "Glass Teapot",
    "2023-01-08",
    16.0,
    "Shipped",
    "Visa",
    "actions"
  ),
  createData(
    257,
    "Unbreakable Water Bottle",
    "2023-01-09",
    40,
    "Shipped",
    "PayPal",
    "actions"
  ),
  createData(
    258,
    "Spoon Saver",
    "2023-01-14",
    15,
    "Shipped",
    "Mastercard",
    "actions"
  ),
  createData(
    259,
    "Jelly Bean",
    "2023-01-19",
    24,
    "Processing",
    "Mastercard",
    "actions"
  ),
  createData(
    260,
    "Hip Flask",
    "2023-01-16",
    25,
    "Processing",
    "Visa",
    "actions"
  ),
  createData(
    261,
    "Woven Slippers",
    "2023-01-22",
    20,
    "Shipped",
    "PayPal",
    "actions"
  ),
];

const getStatusColor = (state: string) => {
  switch (state) {
    case "Shipped":
      return green[500];
    case "Cancelled":
      return red[500];
    case "Processing":
      return orange[500];
    default:
      return undefined;
  }
};

const Orders: React.FC = () => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof OrdersData>("product");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown, MouseEvent>,
    property: keyof OrdersData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = orders.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const visibleOrders = React.useMemo(
    () =>
      [...orders]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );
  console.log([...orders].sort(getComparator(order, orderBy)));
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
            Orders
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" href="/orders" color="info">
              Orders
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
          <EnhancedTableToolbar name="Orders" numSelected={selected.length} />
          <Table>
            <OrdersTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={orders.length}
            />

            <TableBody>
              {visibleOrders.map((order, index) => {
                const isItemSelected = selected.includes(order.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    key={order.id}
                    onClick={(event) => handleClick(event, order.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "textPrimary",
                      }}
                    >{`#000${order.id}`}</TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "textPrimary",
                      }}
                    >
                      {order.product}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "textPrimary",
                      }}
                    >
                      {order.date}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "textPrimary",
                      }}
                    >
                      {order.total}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "textPrimary",
                      }}
                    >
                      <Chip
                        label={order.status}
                        sx={{
                          backgroundColor: getStatusColor(order.status),
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
                      {order.payment}
                    </TableCell>
                    <TableCell>
                      <IconButton aria-label="delete">
                        <CloudDownload />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <Visibility />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={orders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Orders;
