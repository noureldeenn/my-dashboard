import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "@mui/material/styles";

interface CustomBasicMenuProps {
  icon: React.ReactElement;
  items: {
    title: string;
    border?: string;
    description?: string;
    icon?: React.ReactElement;
  }[];
  header?: { title: string; border: string };
  footer?: string;
  message?: boolean;
}

const BasicMenu: React.FC<CustomBasicMenuProps> = ({
  icon,
  items,
  header,
  footer,
  message,
}) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        color="inherit"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {icon}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ border: "1px solid  #e0e0e0" }}
      >
        {header && (
          <Typography
            borderBottom={header.border}
            variant="body2"
            fontWeight={500}
            lineHeight={1.57}
            textAlign="center"
            padding="5px"
          >
            {header.title}
          </Typography>
        )}
        {items.map((el) => (
          <MenuItem
            key={el.title}
            sx={{
              borderBottom: el.border,
              padding: el.icon && "15px",
            }}
            onClick={handleClose}
          >
            <Stack direction="row" spacing={2}>
              {el.icon && (
                <IconButton
                  sx={[
                    (theme) => ({
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      color: "#ffffff",
                      bgcolor: message ? null : theme.palette.primary.main,
                      ...theme.applyStyles("dark", {
                        color: "#1b2635",
                      }),
                    }),
                  ]}
                >
                  {el.icon}
                </IconButton>
              )}
              <Stack spacing={1}>
                <Typography variant="body2" fontWeight={400}>
                  {el.title}
                </Typography>
                <Typography
                  fontSize="0.8125rem"
                  fontWeight={400}
                  color="text.secondary"
                >
                  {el.description}
                </Typography>
              </Stack>
            </Stack>
          </MenuItem>
        ))}
        {footer && (
          <Typography
            variant="body2"
            fontWeight={500}
            lineHeight={1.57}
            textAlign="center"
            padding="5px"
            color={theme.palette.primary.main}
          >
            {footer}
          </Typography>
        )}
      </Menu>
    </>
  );
};

export default BasicMenu;
