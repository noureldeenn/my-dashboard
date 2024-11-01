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
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import EnhancedTableToolbar from "../components/EnhancedTableToolbar";
import { Order, ProductData } from "../types/dataTypes";
import { CloudDownload, Star, Visibility } from "@mui/icons-material";
import ProductTableHead from "../components/ProductTableHead";

function createData(
  id: number,
  name: string,
  imageUrl: string,
  color: string,
  price: number,
  stock: number,
  category: string,
  rating: number,
  reviews: number,
  action: string
): ProductData {
  return {
    id,
    name,
    imageUrl,
    color,
    price,
    stock,
    category,
    rating,
    reviews,
    action,
  };
}

const orders = [
  createData(
    1,
    "Apple iPad Pro",
    "https://via.placeholder.com/40",
    "Silver",
    1399,
    48,
    "Tablets",
    4.6,
    55,
    "actions"
  ),
  createData(
    2,
    "Apple iPad Pro",
    "https://via.placeholder.com/40",
    "Space Gray",
    1399,
    48,
    "Tablets",
    4.6,
    25,
    "actions"
  ),
  createData(
    3,
    "Apple iPhone 15 Pro Max",
    "https://via.placeholder.com/40",
    "Blue Titanium",
    1499,
    36,
    "Smartphones",
    4.6,
    40,
    "actions"
  ),
  createData(
    4,
    "Apple iPhone 15 Pro Max",
    "https://via.placeholder.com/40",
    "Natural Titanium",
    1499,
    45,
    "Smartphones",
    4.9,
    60,
    "actions"
  ),
  createData(
    5,
    "Apple iPhone 15 Pro Max",
    "https://via.placeholder.com/40",
    "White Titanium",
    1399,
    30,
    "Smartphones",
    4.8,
    50,
    "actions"
  ),
  createData(
    6,
    "Apple MacBook Pro 16",
    "https://via.placeholder.com/40",
    "Silver",
    2399,
    55,
    "Notebooks",
    4.7,
    56,
    "actions"
  ),
  createData(
    7,
    "Apple MacBook Pro 16",
    "https://via.placeholder.com/40",
    "Space Black",
    2399,
    48,
    "Notebooks",
    4.7,
    50,
    "actions"
  ),
  createData(
    8,
    "Apple Watch SE",
    "https://via.placeholder.com/40",
    "299",
    299,
    30,
    "Smartwatches",
    4.7,
    40,
    "actions"
  ),
  createData(
    9,
    "Apple Watch SE",
    "https://via.placeholder.com/40",
    "Starlight",
    299,
    45,
    "Smartwatches",
    4.5,
    35,
    "actions"
  ),
  createData(
    10,
    "Apple Watch SE",
    "https://via.placeholder.com/40",
    "Midnight",
    399,
    52,
    "Smartwatches",
    4.2,
    25,
    "actions"
  ),
];

const Products: React.FC = () => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof ProductData>("name");
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
    property: keyof ProductData
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
            Products
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" href="/products" color="info">
              Products
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
          <EnhancedTableToolbar name="Products" numSelected={selected.length} />
          <Table>
            <ProductTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={orders.length}
            />

            <TableBody>
              {visibleOrders.map((product, index) => {
                const isItemSelected = selected.includes(product.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    key={product.id}
                    onClick={(event) => handleClick(event, product.id)}
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
                        <img
                          src={product.imageUrl || "assets/product.png"}
                          alt={product.name}
                          style={{ width: 40, height: 40, marginRight: 8 }}
                        />
                        <Box>
                          <Typography variant="body1">
                            {product.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {product.color}
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
                      ${product.price.toFixed(2)}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "textPrimary",
                      }}
                    >
                      {product.stock}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "textPrimary",
                      }}
                    >
                      {product.category}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "textPrimary",
                      }}
                    >
                      <Box display="flex" alignItems="center">
                        <Star sx={{ color: "gold" }} fontSize="small" />
                        <Typography variant="body2" color="textSecondary">
                          {product.rating} of {product.reviews} Reviews
                        </Typography>
                      </Box>
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

export default Products;
