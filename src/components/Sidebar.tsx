import React from "react";
import { Drawer, Typography, Box } from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Receipt as InvoicesIcon,
  Security as AuthIcon,
  AddShoppingCart,
  FolderOpen,
  WorkOutline,
  ViewInAr,
  DomainVerification,
  CalendarToday,
} from "@mui/icons-material";
import MenuComponent from "./MenuItem";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface MenuItem {
  collapseTitle?: "dashboard" | "pages" | "invoices" | "auth";
  title?: "projects" | "orders" | "products" | "tasks" | "calendar";
  icon: JSX.Element;
  content?: string[];
}

const Sidebar: React.FC = () => {
  const selectedTheme = useSelector(
    (state: RootState) => state.theme.selectedTheme
  );

  const items: MenuItem[] = [
    {
      collapseTitle: "dashboard",
      icon: (
        <DashboardIcon
          sx={[
            (theme) => ({
              mr: "10px",
              color:
                selectedTheme === "dark" || selectedTheme === "light"
                  ? theme.palette.text.secondary
                  : "#EEEEEE",
            }),
          ]}
        />
      ),
      content: ["default", "analytics", "saas"],
    },
    {
      collapseTitle: "pages",
      icon: (
        <FolderOpen
          sx={[
            (theme) => ({
              mr: "10px",
              color:
                selectedTheme === "dark" || selectedTheme === "light"
                  ? theme.palette.text.secondary
                  : "#EEEEEE",
            }),
          ]}
        />
      ),
      content: ["profile", "settings", "pricing", "chat"],
    },
    {
      title: "projects",
      icon: (
        <WorkOutline
          sx={[
            (theme) => ({
              mr: "10px",
              color:
                selectedTheme === "dark" || selectedTheme === "light"
                  ? theme.palette.text.secondary
                  : "#EEEEEE",
            }),
          ]}
        />
      ),
    },
    {
      title: "orders",
      icon: (
        <AddShoppingCart
          sx={[
            (theme) => ({
              mr: "10px",
              color:
                selectedTheme === "dark" || selectedTheme === "light"
                  ? theme.palette.text.secondary
                  : "#EEEEEE",
            }),
          ]}
        />
      ),
    },
    {
      title: "products",
      icon: (
        <ViewInAr
          sx={[
            (theme) => ({
              mr: "10px",
              color:
                selectedTheme === "dark" || selectedTheme === "light"
                  ? theme.palette.text.secondary
                  : "#EEEEEE",
            }),
          ]}
        />
      ),
    },
    {
      collapseTitle: "invoices",
      icon: (
        <InvoicesIcon
          sx={[
            (theme) => ({
              mr: "10px",
              color:
                selectedTheme === "dark" || selectedTheme === "light"
                  ? theme.palette.text.secondary
                  : "#EEEEEE",
            }),
          ]}
        />
      ),
      content: ["list", "details"],
    },
    {
      title: "tasks",
      icon: (
        <DomainVerification
          sx={[
            (theme) => ({
              mr: "10px",
              color:
                selectedTheme === "dark" || selectedTheme === "light"
                  ? theme.palette.text.secondary
                  : "#EEEEEE",
            }),
          ]}
        />
      ),
    },
    {
      title: "calendar",
      icon: (
        <CalendarToday
          sx={[
            (theme) => ({
              mr: "10px",
              color:
                selectedTheme === "dark" || selectedTheme === "light"
                  ? theme.palette.text.secondary
                  : "#EEEEEE",
            }),
          ]}
        />
      ),
    },
    {
      collapseTitle: "auth",
      icon: (
        <AuthIcon
          sx={[
            (theme) => ({
              mr: "10px",
              color:
                selectedTheme === "dark" || selectedTheme === "light"
                  ? theme.palette.text.secondary
                  : "#EEEEEE",
            }),
          ]}
        />
      ),
      content: [
        "sign In",
        "sign In Cover",
        "sign Up",
        "sign Up Cover",
        "reset Password",
        "reset Password Cover",
        "404-Page",
        "500-Page",
      ],
    },
  ];

  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <Box
        sx={[
          (theme) => ({
            width: 240,
            color: theme.palette.text.primary,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: theme.palette.secondary.main,
          }),
        ]}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="17.5px"
          sx={[
            (theme) => ({
              backgroundColor:
                selectedTheme === "light"
                  ? theme.palette.primary.main
                  : selectedTheme === "dark" || selectedTheme === "default"
                  ? "#1b2635"
                  : selectedTheme === "blue"
                  ? "#2f65cb"
                  : selectedTheme === "green"
                  ? "#2e7d32"
                  : "#283593",
            }),
          ]}
        >
          <Typography
            sx={[
              (theme) => ({
                color: selectedTheme === "dark" ? "textPrimary" : "#fff",
              }),
            ]}
            variant="h6"
            fontWeight="bold"
          >
            Nour Badr
          </Typography>
        </Box>
        <MenuComponent items={items} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
