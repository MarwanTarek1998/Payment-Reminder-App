import React from "react";
import { Box, Button, IconButton, Tab, Tooltip } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import DescriptionIcon from "@mui/icons-material/Description";
import { useOutletContext } from "react-router-dom";

export const InvoicesTabs = () => {

  const openInvoiceForm = useOutletContext()

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - 300px)` },
        height: "calc(100vh - 144px)",
        backgroundColor: "#fff",
        position: 'relative'
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Active Invoices" value="1" />
            <Tab label="Cloased Invoices" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>

        <Tooltip title="Add Invoice" placement="left">
          <Button
            color="secondary"
            variant="contained"
            sx={{ width: "64px", height: "64px", borderRadius: "50%" , position:'absolute' , bottom:'5%' , right:'5%' }}
            onClick={openInvoiceForm}
          >
            <DescriptionIcon sx={{ fontSize: "2rem" }} />
          </Button>
        </Tooltip>
      </TabContext>
    </Box>
  );
};
