import React, { useMemo } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

import { T_RoutedDataProps } from "~/types/T_RoutedDataProps";

export default function PositionedMenu(props: T_RoutedDataProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const listMenuItems = useMemo(() => {
    return props.data.map((v) => (
      <MenuItem key={v.pattern} onClick={handleClose}>
        <NavLink to={v.to}>{v.label}</NavLink>
      </MenuItem>
    ));
  }, [props.data]);

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Menu
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
        {listMenuItems}
      </Menu>
    </div>
  );
}
