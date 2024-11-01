import React from "react";
import { Drawer, Box, Typography, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setTheme } from "../store/slices/themeSlice";
import { Stack } from "@mui/system";

const themeOptions = [
  { label: "Dark", them: "dark", value: "#23303f" },
  { label: "Light", them: "light", value: " #f5f5f5" },
  {
    label: "Default",
    them: "default",
    value:
      "linear-gradient(-45deg, rgb(35, 48, 63) 50%, rgb(245, 245, 245) 0px)",
  },

  {
    label: "Blue",
    them: "blue",
    value:
      "linear-gradient(-45deg, rgb(71, 130, 218) 50%, rgb(245, 245, 245) 0px)",
  },

  {
    label: "Green",
    them: "green",
    value:
      "linear-gradient(-45deg, rgb(76, 175, 80) 50%, rgb(245, 245, 245) 0px)",
  },
  {
    label: "Indigo",
    them: "indigo",
    value:
      "linear-gradient(-45deg, rgb(63, 81, 181) 50%, rgb(245, 245, 245) 0px)",
  },
];

interface ThemeDrawerProps {
  open: boolean;
  onClose: () => void;
}

const ThemeDrawer: React.FC<ThemeDrawerProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(
    (state: RootState) => state.theme.selectedTheme
  );
  const handleThemeChange = (theme: string) => {
    dispatch(setTheme(theme));
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width="300px" p={3}>
        <Typography variant="h6" gutterBottom>
          Theme Settings
        </Typography>
        <Stack
          sx={[
            (theme) => ({
              backgroundColor: "#E5F6FD",
              ...theme.applyStyles("dark", {
                backgroundColor: "#071318",
              }),
            }),
          ]}
          p="10px"
          borderRadius="3px"
        >
          <Typography
            variant="body2"
            fontWeight={400}
            color={
              selectedTheme === "blue" ||
              selectedTheme === "indigo" ||
              selectedTheme === "green"
                ? "black"
                : "textPrimary"
            }
            gutterBottom
          >
            <strong>Hello!</strong> Select your style below. Choose the one that
            best fits your needs.
          </Typography>
        </Stack>

        <Grid container spacing={2} mt={2}>
          {themeOptions.map((option) => (
            <Grid item xs={6} key={option.them}>
              <Button
                variant={
                  selectedTheme === option.them ? "outlined" : "contained"
                }
                onClick={() => handleThemeChange(option.them)}
                sx={[
                  (theme) => ({
                    width: "100%",
                    height: "75px",
                    justifyContent: "center",
                    backgroundColor: theme.palette.background.default,
                  }),
                ]}
              >
                <Box
                  width={50}
                  height={50}
                  borderRadius="50%"
                  boxShadow="rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  sx={{ background: option.value }}
                />
              </Button>
            </Grid>
          ))}
        </Grid>

        <Box mt={4}>
          <Button variant="outlined" fullWidth>
            Documentation
          </Button>
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
            Get Mira Pro
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ThemeDrawer;
