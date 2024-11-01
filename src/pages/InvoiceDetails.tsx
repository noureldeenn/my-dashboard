import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import Grid from "@mui/material/Grid";
import React from "react";

const InvoiceDetails: React.FC = () => {
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
            Invoices
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" href="/invoices/list" color="info">
              Invoices
            </Link>
            <Link
              underline="none"
              href="/invoices/details"
              aria-current="page"
              color="info"
            >
              Details
            </Link>
          </Breadcrumbs>
        </Box>
      </Box>
      <Card
        sx={[
          (theme) => ({
            padding: "20px",
            mb: "25px",
            backgroundColor: "#fff",
            ...theme.applyStyles("dark", {
              backgroundColor: theme.palette.secondary.main,
            }),
          }),
        ]}
      >
        <CardContent>
          <Typography variant="body2" fontWeight={400}>
            Hello Anna Walley,
          </Typography>
          <Typography variant="body2" fontWeight={400}>
            This is the receipt for a payment of $268.85 (USD) you made to Mira.
          </Typography>

          <Grid
            container
            spacing={2}
            alignItems="center"
            style={{ marginTop: 10 }}
          >
            <Grid item xs={6}>
              <Typography fontSize="11px" fontWeight={400}>
                Payment No.
              </Typography>
              <Typography fontSize="14px" fontWeight={400}>
                74103724
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Typography fontSize="11px" fontWeight={400}>
                Payment Date
              </Typography>
              <Typography fontSize="14px" fontWeight={400}>
                January 2, 2023 03:45 pm
              </Typography>
            </Grid>
          </Grid>

          <Divider style={{ margin: "20px 0" }} />

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <Typography
                fontSize="13px"
                fontWeight={400}
                color="textSecondary"
              >
                Client
              </Typography>
              <Typography fontSize="13px" fontWeight={400}>
                Anna Walley
              </Typography>
              <Typography fontSize="13px" fontWeight={400}>
                418 Forest Avenue
              </Typography>
              <Typography fontSize="13px" fontWeight={400}>
                New York City
              </Typography>
              <Typography fontSize="13px" fontWeight={400}>
                10013
              </Typography>
              <Typography fontSize="13px" fontWeight={400}>
                USA
              </Typography>
              <Typography fontSize="13px" fontWeight={400} color="info">
                anna@walley.com
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Typography
                fontSize="13px"
                color="textSecondary"
                fontWeight={400}
              >
                Payment To
              </Typography>
              <Typography fontSize="13px" fontWeight={400}>
                Mira LLC
              </Typography>
              <Typography>354 Ray Alley</Typography>
              <Typography fontSize="13px" fontWeight={400}>
                Denver
              </Typography>
              <Typography fontSize="13px" fontWeight={400}>
                80202
              </Typography>
              <Typography fontSize="13px" fontWeight={400}>
                USA
              </Typography>
              <Typography fontSize="13px" fontWeight={400} color="info">
                info@mira.com
              </Typography>
            </Grid>
          </Grid>

          <Divider style={{ margin: "20px 0" }} />

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                  >
                    Mira Theme Customization
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                    align="center"
                  >
                    2
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                    align="right"
                  >
                    $150.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                  >
                    Monthly Subscription
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                    align="center"
                  >
                    3
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                    align="right"
                  >
                    $25.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                  >
                    Additional Service
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                    align="center"
                  >
                    2
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                    align="right"
                  >
                    $100.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                    colSpan={2}
                    align="right"
                  >
                    Subtotal
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                    align="right"
                  >
                    $275.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                    colSpan={2}
                    align="right"
                  >
                    Shipping
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                    align="right"
                  >
                    $8.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                    colSpan={2}
                    align="right"
                  >
                    Discount
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "textPrimary",
                    }}
                    align="right"
                  >
                    5%
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} align="right">
                    <strong>Total</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>$268.85</strong>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography
            fontSize="12px"
            textAlign="center"
            color="textSecondary"
            style={{ marginTop: 20 }}
          >
            Extra note: Please send all items at the same time to the shipping
            address. Thanks in advance.
          </Typography>
          <Stack justifyContent="center" alignItems="center"  >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{
                marginTop: 20,
                fontSize: "13px",
                width: "140px",
                textTransform: "none",
              }}
            >
              Print this receipt
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InvoiceDetails;
