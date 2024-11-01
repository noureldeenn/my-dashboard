import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { useTheme } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/system";
import Sidebar from "./Sidebar";
import FloatingButton from "./FloatingButton";
import { Drawer } from "@mui/material";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation();
  const isSignInPage =
    location.pathname === "/auth/sign-in" ||
    location.pathname === "/auth/sign-in-cover" ||
    location.pathname === "/auth/sign-up" ||
    location.pathname === "/auth/sign-up-cover" ||
    location.pathname === "/auth/reset-password" ||
    location.pathname === "/auth/reset-password-cover" ||
    location.pathname === "/auth/404-page" ||
    location.pathname === "/auth/500-page";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {!isSignInPage && (
        <Box display="flex">
          {isMobile ? (
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "240px",
                },
              }}
            >
              <Box sx={{ width: "240px" }}>
                <Sidebar />
              </Box>
            </Drawer>
          ) : (
            <Sidebar />
          )}

          <FloatingButton />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Header
              isMobile={isMobile}
              handleDrawerToggle={handleDrawerToggle}
            />
            <Box>{children}</Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Layout;
