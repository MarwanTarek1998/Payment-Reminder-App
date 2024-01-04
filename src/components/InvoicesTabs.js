import React, { useEffect, useState } from "react";
import { Backdrop, Box, Button, Tab, Tooltip , CircularProgress } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import DescriptionIcon from "@mui/icons-material/Description";
import { useOutletContext, useParams } from "react-router-dom";
import { useGetInvoices } from "../hooks/useGetInvoices";
import { InvoiceCard } from "./invoiceCard";
import { AddInvoiceForm } from "./AddInvoiceForm";

export const InvoicesTabs = () => {
  const { id } = useParams();

  const [handleOpenInvoiceForm , openInvoiceForm] = useOutletContext();

  const [value, setValue] = useState("1");
  const [activeInvoices, setActiveInvoices] = useState([]);
  const [closedInvoices, setCloseInvoices] = useState([]);
  const [invoice, setInvoice] = useState(null);

  const { data: invoices, isLoading } = useGetInvoices(id);

  useEffect(() => {
    setActiveInvoices(
      invoices?.data.filter((invoice) => invoice.invoiceID.state == "Active")
    );
    setCloseInvoices(
      invoices?.data.filter((invoice) => invoice.invoiceID.state == "Closed")
    );
  }, [invoices]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const editInvoice = (invoice) => {
    setInvoice(invoice)
    handleOpenInvoiceForm()
  }

  const closeInvoiceForm = () => {
    handleOpenInvoiceForm()
    setInvoice(null)
  }

  if (isLoading) {
    return <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>;
  }
  
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

      <AddInvoiceForm
        open={openInvoiceForm}
        closeInvoiceForm = {closeInvoiceForm}
        invoice={invoice}
        />

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Active Invoices" value="1" />
            <Tab label="Closed Invoices" value="2" />
          </TabList>
        </Box>

        <TabPanel sx={{ paddingX: "0px" }} value="1">
          {activeInvoices?.map((invoice) => (
            <InvoiceCard invoice={invoice} editInvoice = {editInvoice}/>
          ))}
        </TabPanel>
        
        <TabPanel sx={{ paddingX: "0px" }} value="2">
          {closedInvoices?.map((invoice) => (
            <InvoiceCard invoice={invoice} />
          ))}
        </TabPanel>

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
            onClick={handleOpenInvoiceForm}
          >
            <DescriptionIcon sx={{ fontSize: "2rem" }} />
          </Button>
        </Tooltip>
        
      </TabContext>
    </Box>
  );
};
