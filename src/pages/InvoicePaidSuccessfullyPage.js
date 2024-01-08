import { Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export const InvoicePaidSuccessfullyPage = () => {
  const { invoiceId } = useParams();

  useEffect(() => {
    axios.put("http://localhost:5000/invoices/closeInvoice", {
      invoiceId: invoiceId,
      invoiceInfo: {
        state: "Closed",
      },
    });
  });

  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        backgroundColor : 'primary.main',
        textAlign : 'center'
      }}
    >
      <CheckCircleOutlineIcon
        sx={{
          width: 100,
          height: 100,
          color: "secondary.main",
        }}
      />
      <Typography variant="h4" component="h1" >
        Your invoice is paid successfully   
      </Typography>
    </Stack>
  );
};
