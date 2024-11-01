import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  TablePagination,
  Checkbox,
  Avatar,
  Chip,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import EnhancedTableToolbar from "../components/EnhancedTableToolbar";
import { Order, InvoiceData } from "../types/dataTypes";
import { CloudDownload, Star, Visibility } from "@mui/icons-material";
import InvoiceTableHead from "../components/InvoiceTableHead";
import { green, grey, orange } from "@mui/material/colors";

function createData(
  id: number,
  customer: string,
  email: string,
  status: string,
  date: string,
  amount: number,
  action: string
): InvoiceData {
  return {
    id,
    customer,
    email,
    status,
    date,
    amount,
    action,
  };
}

const orders = [
  createData(
    12,
    "Anna Walley",
    "anna@walley.com",
    "Sent",
    "2023-01-02",
    5030,
    "actions"
  ),
  createData(
    13,
    "Doris Fritz",
    "doris@fritz.com",
    "Void",
    "2023-01-05",
    4900,
    "actions"
  ),
  createData(
    14,
    "Edward Adkins",
    "edward@adkins.com",
    "Paid",
    "2023-01-08",
    1499,
    "actions"
  ),
  createData(
    15,
    "Edwin Baker",
    "edwin@baker.com",
    "Paid",
    "2023-02-08",
    678,
    "actions"
  ),
  createData(
    16,
    "Gordon Workman",
    "gordan@workman.com",
    "Sent",
    "2023-01-22",
    2775,
    "actions"
  ),
  createData(
    17,
    "Jo Avery",
    "jo@avery.com",
    "Sent",
    "2023-01-25",
    1800,
    "actions"
  ),
  createData(
    18,
    "Leigha Hyden",
    "leigha@hyden.com",
    "Paid",
    "2023-01-16",
    1009,
    "actions"
  ),
  createData(
    19,
    "Maureen Gagnon",
    "maureen@gagnon.com",
    "Void",
    "2023-01-13",
    1509,
    "actions"
  ),
  createData(
    20,
    "Maxine Thompson",
    "maxine@thompson.com",
    "Sent",
    "2023-01-03",
    1493,
    "actions"
  ),
  createData(
    11,
    "Shawn Waddell",
    "shawn@waddell.com",
    "Sent",
    "2023-01-02",
    1099,
    "actions"
  ),
];

const getStatusColor = (state: string) => {
  switch (state) {
    case "Void":
      return green[500];
    case "Paid":
      return grey[500];
    case "Sent":
      return orange[500];
    default:
      return undefined;
  }
};

const InvoicesList: React.FC = () => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof InvoiceData>("customer");
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
    property: keyof InvoiceData
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
            Invoices
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" href="/invoices/list" color="info">
              List
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
          <EnhancedTableToolbar name="Invoices" numSelected={selected.length} />
          <Table>
            <InvoiceTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={orders.length}
            />

            <TableBody>
              {visibleOrders.map((invoice, index) => {
                const isItemSelected = selected.includes(invoice.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    key={invoice.id}
                    onClick={(event) => handleClick(event, invoice.id)}
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
                      <Box display="flex" alignItems="center">
                        <Avatar sx={{ backgroundColor: "blue", color: "#fff" }}>
                          {invoice.customer.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography
                            variant="body2"
                            fontWeight={500}
                            sx={{ pl: "5px" }}
                          >
                            {invoice.customer}
                          </Typography>
                          <Typography
                            variant="body2"
                            fontWeight={400}
                            color="textSecondary"
                            sx={{ pl: "5px" }}
                          >
                            {invoice.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "textPrimary",
                      }}
                    >
                      <Chip
                        label={invoice.status}
                        sx={{
                          backgroundColor: getStatusColor(invoice.status),
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
                      {`#000${invoice.id}`}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "textPrimary",
                      }}
                    >
                      ${invoice.amount.toFixed(2)}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "textPrimary",
                      }}
                    >
                      {invoice.date}
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

export default InvoicesList;
