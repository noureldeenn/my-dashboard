import React, { useState } from "react";
import { Fab } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import ThemeDrawer from "./ThemeDrawer";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const FloatingButton: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const selectedTheme = useSelector(
    (state: RootState) => state.theme.selectedTheme
  );
  return (
    <>
      <Fab
        color="primary"
        sx={[
          (theme) => ({
            backgroundColor:
              selectedTheme === "light" || selectedTheme === "dark"
                ? "none"
                : theme.palette.secondary.main,
          }),
        ]}
        aria-label="toggle theme drawer"
        onClick={toggleDrawer}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <PaletteIcon />
      </Fab>
      <ThemeDrawer open={drawerOpen} onClose={toggleDrawer} />
    </>
  );
};

export default FloatingButton;
