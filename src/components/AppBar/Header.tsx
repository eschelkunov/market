import React, { SyntheticEvent, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { SimpleMenu } from "../SimpleMenu/SimpleMenu";
import { ABOUT, ADMIN, CART, CONTACT_US, GOODS } from "../AppRoutes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header: React.FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const handleHeaderName = (locationPath: string) => {
    switch (locationPath) {
      case GOODS:
        return "Goods";
      case CONTACT_US:
        return "Contact Information";
      case ABOUT:
        return "About Us";
      case ADMIN:
        return "Admin panel";
      case CART:
        return "My Cart";
      default:
        return "";
    }
  };

  const onMenuClick = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const onCartClick = () => {
    history.push(CART);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>

          <SimpleMenu anchorEl={anchorEl} close={handleClose} />

          <Typography variant="h6" className={classes.title}>
            {handleHeaderName(location.pathname)}
          </Typography>
          {["Goods", "Contact Information", "About Us"].includes(
            handleHeaderName(location.pathname)
          ) && (
            <Button color="inherit" onClick={onCartClick}>
              My cart
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};