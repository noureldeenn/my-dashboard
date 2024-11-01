import React, { useEffect, useState } from "react";
import {
  List,
  ListItemButton,
  Collapse,
  Typography,
  Link,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  collapseTitle?: "dashboard" | "pages" | "invoices" | "auth";
  title?: "projects" | "orders" | "products" | "tasks" | "calendar";
  icon: JSX.Element;
  content?: string[];
}

interface MenuCom {
  items: MenuItem[];
}

const sharedFontStyle = { fontWeight: 400, lineHeight: 1.5, fontSize: "13px" };

const MenuComponent: React.FC<MenuCom> = ({ items }) => {
  const navigate = useNavigate();
  const selectedTheme = useSelector(
    (state: RootState) => state.theme.selectedTheme
  );
  const [open, setOpen] = useState({
    dashboard: false,
    pages: false,
    invoices: false,
    auth: false,
  });

  useEffect(() => {
    const savedMenuState = JSON.parse(
      localStorage.getItem("menuState") || "{}"
    );
    setOpen((prev) => ({ ...prev, ...savedMenuState }));
  }, []);

  const handleToggle = (
    section: "dashboard" | "pages" | "invoices" | "auth"
  ) => {
    setOpen((prevOpen) => {
      const newState = { ...prevOpen, [section]: !prevOpen[section] };
      localStorage.setItem("menuState", JSON.stringify(newState));
      return newState;
    });
  };

  const handleClick = (to: string | undefined, event: any) => {
    event.preventDefault();
    navigate("/", { replace: true });
    navigate(`${to?.replaceAll(" ", "-").toLowerCase()}`);
  };
  return (
    <List>
      <Typography
        sx={[
          (theme) => ({
            ml: 2,
            mt: 2,
            mb: 1,
            fontWeight: 500,
            lineHeight: 1.57,
            fontSize: "0.696429rem",
            color:
              selectedTheme === "dark" || selectedTheme === "light"
                ? theme.palette.text.secondary
                : "#EEEEEE",
          }),
        ]}
      >
        PAGES
      </Typography>
      {items.map((item, index) => (
        <>
          <ListItemButton
            key={index}
            sx={{ py: "10px" }}
            onClick={() => {
              item.collapseTitle && handleToggle(item.collapseTitle);
            }}
          >
            {item.icon}
            <Stack
              width="100%"
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              {item.title ? (
                <Link
                  color="inherit"
                  underline="none"
                  onClick={(event) => handleClick(item.title, event)}
                  href=""
                >
                  <Typography
                    sx={[
                      (theme) => ({
                        ...sharedFontStyle,
                        color:
                          selectedTheme === "dark" || selectedTheme === "light"
                            ? "textPrimary"
                            : "#ffffff",
                      }),
                    ]}
                  >
                    {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  sx={[
                    (theme) => ({
                      ...sharedFontStyle,
                      color:
                        selectedTheme === "dark" || selectedTheme === "light"
                          ? "textPrimary"
                          : "#ffffff",
                    }),
                  ]}
                >
                  {item.collapseTitle &&
                    item.collapseTitle.charAt(0).toUpperCase() +
                      item.collapseTitle.slice(1)}
                </Typography>
              )}

              {item.collapseTitle && open[item.collapseTitle]
                ? item.collapseTitle && (
                    <ExpandLess
                      sx={[
                        (theme) => ({
                          color:
                            selectedTheme === "dark" ||
                            selectedTheme === "light"
                              ? theme.palette.text.secondary
                              : "#EEEEEE",
                        }),
                      ]}
                    />
                  )
                : item.collapseTitle && (
                    <ExpandMore
                      sx={[
                        (theme) => ({
                          color:
                            selectedTheme === "dark" ||
                            selectedTheme === "light"
                              ? theme.palette.text.secondary
                              : "#EEEEEE",
                        }),
                      ]}
                    />
                  )}
            </Stack>
          </ListItemButton>
          {item.content &&
            item.content.map((el, ind) => (
              <Collapse
                key={ind}
                in={item?.collapseTitle && open[item?.collapseTitle]}
                timeout="auto"
                unmountOnExit
              >
                <Typography
                  sx={[
                    (theme) => ({
                      ...sharedFontStyle,
                      pl: 6,
                      py: 1,
                      color:
                        selectedTheme === "dark" || selectedTheme === "light"
                          ? theme.palette.text.secondary
                          : "#EEEEEE",
                    }),
                  ]}
                >
                  <Link
                    color="inherit"
                    underline="none"
                    href=""
                    onClick={(event) =>
                      handleClick(`${item.collapseTitle}/${el}`, event)
                    }
                  >
                    {el.charAt(0).toUpperCase() + el.slice(1)}
                  </Link>
                </Typography>
              </Collapse>
            ))}
        </>
      ))}
    </List>
  );
};

export default MenuComponent;
