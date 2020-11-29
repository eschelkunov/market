import React from "react";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { ABOUT, ADMIN, CONTACT_US, GOODS } from "../AppRoutes";

interface IMenuProps {
  anchorEl: Element | null;
  close: () => void;
}

export const SimpleMenu: React.FunctionComponent<IMenuProps> = ({
  anchorEl,
  close,
}) => {
  const history = useHistory();

  const onItemClick = (route: string) => {
    history.push(route);
    close();
  };

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={close}
    >
      <MenuItem onClick={() => onItemClick(GOODS)}>Goods</MenuItem>
      <MenuItem onClick={() => onItemClick(CONTACT_US)}>
        Contact Information
      </MenuItem>
      <MenuItem onClick={() => onItemClick(ABOUT)}>About Us</MenuItem>
      <MenuItem onClick={() => onItemClick(ADMIN)}>Admin</MenuItem>
    </Menu>
  );
};
