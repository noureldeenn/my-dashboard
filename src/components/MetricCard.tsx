import React from "react";
import { Box, Card, CardContent, Typography, Grid, Chip } from "@mui/material";
import { green, red, grey, blue } from "@mui/material/colors";

interface MetricCardProps {
  title: string;
  value: string | number;
  period: string;
  percentage: number;
  positive: boolean;
  text?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  period,
  percentage,
  positive,
  text,
}) => {
  return (
    <Card
      sx={[
        (theme) => ({
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor:
            title === "Pending Orders" || title === "Tody Visitors"
              ? "#dfe8f6"
              : "#fff",
          ...theme.applyStyles("dark", {
            backgroundColor: theme.palette.secondary.main,
          }),
        }),
      ]}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h6"
            sx={[
              (theme) => ({
                color:
                  title === "Pending Orders" || title === "Tody Visitors"
                    ? theme.palette.primary.main
                    : "textPrimary",
              }),
            ]}
          >
            {title}
          </Typography>
          {title !== "Pending Orders" && title !== "Tody Visitors" && (
            <Chip
              label={period}
              size="small"
              sx={[
                (theme) => ({
                  backgroundColor: theme.palette.primary.main,
                  color: "#fff",
                  borderRadius: 1,
                  fontSize: 12,
                }),
              ]}
            />
          )}
        </Box>
        <Typography
          variant="h5"
          sx={[
            (theme) => ({
              mt: 1,
              color:
                title === "Pending Orders" || title === "Tody Visitors"
                  ? theme.palette.primary.main
                  : "textPrimary",
            }),
          ]}
        >
          {value}
        </Typography>
        <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
          <Typography
            variant="body1"
            sx={{
              color: positive ? green[500] : red[500],
              backgroundColor: positive ? green[50] : red[50],
              borderRadius: 1,
              px: 0.5,
              mr: 0.5,
            }}
          >
            {positive ? `+${percentage}%` : `${percentage}%`}
          </Typography>
          {text ? (
            <Typography variant="body2" color="textSecondary">
              {text}
            </Typography>
          ) : (
            <Typography variant="body1" color="textSecondary">
              Since last month
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
export default MetricCard;
