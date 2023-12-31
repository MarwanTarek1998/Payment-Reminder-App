import React, { useState } from "react";
import { NavBar } from "../components/NavBar.js";
import { ClientsMenu } from "../components/ClientsMenu";
import { Box, Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AddClientForm } from "../components/AddClientForm.js";
import { AddInvoiceForm } from "../components/AddInvoiceForm.js";

import PersonIcon from "@mui/icons-material/Person";

export const DashboardPage = () => {
  const [openClientMenu, setOpenClientMenu] = useState(false);
  const [openClientForm, setOpenClientForm] = useState(false);
  const [openInvoiceForm, setOpenInvoiceForm] = useState(false);

  const handleOpenClientMenu = () => {
    setOpenClientMenu(!openClientMenu);
  };

  const handleOpenClientForm = () => {
    setOpenClientForm(!openClientForm);
  };

  const handleOpenInvoiceForm = () => {
    setOpenInvoiceForm(!openInvoiceForm);
  };

  return (
    <Box>
      <NavBar />

      <Box sx={{ display: "flex" }}>
        <ClientsMenu
          mobileOpen={openClientMenu}
          closeClientMenu={handleOpenClientMenu}
          openClientForm={handleOpenClientForm}
        />
        <Outlet context={handleOpenInvoiceForm} />
      </Box>

      <AddClientForm
        open={openClientForm}
        closeClientForm={handleOpenClientForm}
      />
      <AddInvoiceForm
        open={openInvoiceForm}
        closeInvoiceForm={handleOpenInvoiceForm}
      />

      <Button
        color="primary"
        variant="contained"
        sx={{
          display: { xs: "block", sm: "none" },
          position: "absolute",
          top: "50%",
          left: "0",
          borderRadius: '0px 6px 6px 0px'
        }}
        onClick={handleOpenClientMenu}
      >
        <PersonIcon sx={{fontSize : '1.8rem'}} />
      </Button>
    </Box>
  );
};
