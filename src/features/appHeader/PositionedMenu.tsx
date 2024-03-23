import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

export function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          <NavLink end to="/">
            Main
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink end to="/page1">
            Page 1
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink end to="/page2">
            Page 2
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink end to="/err">
            err
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
