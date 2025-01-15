import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems = [
    { text: "Главная", path: "/" },
    { text: "Клиенты", path: "/clients" },
    { text: "Books", path: "/books" },
    { text: "Ask AI", path: "/ask-ai" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          component={Link}
          to={item.path}
          key={item.text}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            АвтоФаны
          </Typography>
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Link key={item.text} to={item.path} className={styles.navLink}>
                  {item.text}
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
