import React, { useState } from "react";
import {
  Button,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";

import { Link } from "react-router-dom";

export const ClientsMenu = ({ mobileOpen ,closeClientMenu ,openClientForm , clients }) => {
  const drawerWidth = 300;


  const drawer = (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      <Toolbar />
      <List sx={{ paddingTop: "46px" }}>
        {clients?.map((client) => (
          <Link
            to={`./clinet-invoices/${client._id}`}
            style={{ width: "100%", textDecoration: "none" }}
            key={client._id}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <PersonIcon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText
                  primary={`${client.firstName} ${client.lastName}`}
                  sx={{ color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      <Button
        variant="contained"
        color="secondary"
        sx={{ width: "90%", margin: "auto auto 16px auto" }}
        startIcon={<PersonAddIcon />}
        onClick={openClientForm}
      >
        Add Client
      </Button>
    </Box>
  );

  return (
    <Box
      component="div"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={closeClientMenu}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#373773",
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#373773",
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      
    </Box>
  );
};
