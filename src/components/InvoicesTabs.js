import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Tab,
  Tooltip,
  Typography,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import DescriptionIcon from "@mui/icons-material/Description";
import { useOutletContext, useParams } from "react-router-dom";
import { useGetInvoices } from "../hooks/useGetInvoices";

export const InvoicesTabs = () => {
  const { id } = useParams();

  const openInvoiceForm = useOutletContext();

  const [value, setValue] = React.useState("1");

  const { data: invoices } = useGetInvoices(id);

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
        position: "relative",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Active Invoices" value="1" />
            <Tab label="Cloased Invoices" value="2" />
          </TabList>
        </Box>
        <TabPanel sx={{ paddingX: "0px" }} value="1">
          {invoices?.data.map((invoice) => (
            <Card sx={{marginBottom: '16px'}}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <DescriptionIcon
                  sx={{
                    fontSize: "3rem",
                    color: "#373773",
                    marginRight: "16px",
                  }}
                />
                <Box sx={{ flexGrow: "1" }}>
                  <Typography variant="h4" sx={{ marginBottom: "8px" }}>
                    {invoice.invoiceID.subject}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">{invoice.invoiceID.amount} $</Typography>
                    <Typography sx={{ color: "#4caf50", fontWeight: "700" }}>
                      {invoice.invoiceID.state}
                    </Typography>
                    <Typography>{invoice.invoiceID.dueDate}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>

        <Tooltip title="Add Invoice" placement="left">
          <Button
            color="secondary"
            variant="contained"
            sx={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              position: "absolute",
              bottom: "5%",
              right: "5%",
            }}
            onClick={openInvoiceForm}
          >
            <DescriptionIcon sx={{ fontSize: "2rem" }} />
          </Button>
        </Tooltip>
      </TabContext>
    </Box>
  );
};
