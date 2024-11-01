import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Box,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DatasetIcon from "@mui/icons-material/Dataset";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HouseIcon from "@mui/icons-material/House";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BasicMenu from "./BasicMenu";
import background from "../assets/background.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  isMobile: boolean;
  handleDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobile, handleDrawerToggle }) => {
  const selectedTheme = useSelector(
    (state: RootState) => state.theme.selectedTheme
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={[
        (theme) => ({
          backgroundColor:
            selectedTheme === "dark"
              ? theme.palette.background.default
              : selectedTheme === "light"
              ? theme.palette.primary.main
              : "#fff",
        }),
      ]}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box display="flex" alignItems="center" flexGrow={1}>
          <SearchIcon
            sx={{
              color:
                selectedTheme === "dark"
                  ? "#6f767f"
                  : selectedTheme === "light"
                  ? "#EEEEEE"
                  : "#b4b4b4",
            }}
          />
          <InputBase
            placeholder="Search topics..."
            sx={[
              (theme) => ({
                ml: 1,
                flex: 1,

                "& .MuiInputBase-input::placeholder": {
                  color:
                    selectedTheme === "dark"
                      ? "#6f767f"
                      : selectedTheme === "light"
                      ? "#EEEEEE"
                      : "#b4b4b4",
                  fontSize: "13px",
                  opacity: 1,
                },
              }),
            ]}
            inputProps={{ "aria-label": "search topics" }}
          />
        </Box>

        <Box display="flex" alignItems="center">
          <BasicMenu
            icon={
              <Badge
                badgeContent={3}
                color={
                  selectedTheme === "green"
                    ? "success"
                    : selectedTheme === "light"
                    ? "error"
                    : "primary"
                }
              >
                <ChatBubbleOutlineIcon
                  sx={{
                    color:
                      selectedTheme === "dark" || selectedTheme === "light"
                        ? "#fff"
                        : "#acacac",
                  }}
                />
              </Badge>
            }
            items={[
              {
                title: "Update complete",
                border: "1px solid  #e0e0e0",
                description: "Restart server to complete update.",
                icon: (
                  <Avatar
                    alt="User Avatar"
                    src={background}
                    sx={{ width: 50, height: 50 }}
                  />
                ),
              },
              {
                title: "New connection",
                border: "1px solid  #e0e0e0",
                description: "Anna accepted your request.",
                icon: (
                  <Avatar
                    alt="User Avatar"
                    src={background}
                    sx={{ width: 50, height: 50 }}
                  />
                ),
              },
              {
                title: "Lorem ipsum",
                border: "1px solid  #e0e0e0",
                description: "Lorem ipsum server to complete update.",
                icon: (
                  <Avatar
                    alt="User Avatar"
                    src={background}
                    sx={{ width: 50, height: 50 }}
                  />
                ),
              },
              {
                title: "New login",
                border: "1px solid  #e0e0e0",
                description: "Login from 192.186.1.1.",
                icon: (
                  <Avatar
                    alt="User Avatar"
                    src={background}
                    sx={{ width: 50, height: 50 }}
                  />
                ),
              },
            ]}
            header={{ title: "3 New Messages", border: "1px solid  #e0e0e0" }}
            footer="Show all messages"
            message={true}
          />

          <BasicMenu
            icon={
              <IconButton color="inherit">
                <Badge
                  badgeContent={7}
                  color={
                    selectedTheme === "green"
                      ? "success"
                      : selectedTheme === "light"
                      ? "error"
                      : "primary"
                  }
                >
                  <NotificationsIcon
                    sx={{
                      color:
                        selectedTheme === "dark" || selectedTheme === "light"
                          ? "#fff"
                          : "#acacac",
                    }}
                  />
                </Badge>
              </IconButton>
            }
            items={[
              {
                title: "Update complete",
                border: "1px solid  #e0e0e0",
                description: "Restart server to complete update.",
                icon: <DatasetIcon />,
              },
              {
                title: "New connection",
                border: "1px solid  #e0e0e0",
                description: "Anna accepted your request.",
                icon: <PersonAddAltIcon />,
              },
              {
                title: "Lorem ipsum",
                border: "1px solid  #e0e0e0",
                description: "Lorem ipsum server to complete update.",
                icon: <NotificationsIcon />,
              },
              {
                title: "New login",
                border: "1px solid  #e0e0e0",
                description: "Login from 192.186.1.1.",
                icon: <HouseIcon />,
              },
            ]}
            header={{
              title: "7 New Notifications",
              border: "1px solid  #e0e0e0",
            }}
            footer="Show all notifications"
          />

          <BasicMenu
            icon={
              <Tooltip title="Language">
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt="Country Flag"
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                />
              </Tooltip>
            }
            items={[
              { title: "English" },
              { title: "german" },
              { title: "French" },
            ]}
          />

          <BasicMenu
            icon={
              <Tooltip title="account">
                <Avatar
                  alt="User Avatar"
                  src={background}
                  sx={{ width: 40, height: 40 }}
                />
              </Tooltip>
            }
            items={[
              { title: "Profile" },
              { title: "Settings & Privacy", border: "1px solid  #e0e0e0" },
              { title: "Help" },
              { title: "SignOut" },
            ]}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
