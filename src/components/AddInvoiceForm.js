import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { useAddInvoice } from "../hooks/useAddInvoice";
import { useUpdateInvoice } from "../hooks/useUpdateInvoice";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";

export const AddInvoiceForm = ({ open, closeInvoiceForm, invoice }) => {
  // Client Id
  const { id } = useParams();

  const [clientEmail, setClientEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const [subjectFlag, setSubjectFlag] = useState(false);
  const [amountFlag, setAmountFlag] = useState(false);
  const [dateFlag, setDateFlag] = useState(false);

  const [invoiceAddedSuccessfuly, setInvoiceAddedSuccessfuly] = useState(false);

  useEffect(() => {
    axios
      .get(`https://payment-reminder-app-backend.onrender.com/clients/getClientInfo/${id}`)
      .then((response) => {
        setClientEmail(response.data.email);
      });

    setSubject(invoice?.subject);
    setAmount(invoice?.amount);
  }, [invoice]);

  const handleAddInviceNotification = () => {
    setInvoiceAddedSuccessfuly(false);
  };

  const clearInputs = () => {
    setSubject("");
    setAmount("");
    setDueDate(null);
  };

  const onSuccess = () => {
    closeInvoiceForm();
    setInvoiceAddedSuccessfuly(true);
    clearInputs();
  };

  const { mutate: addInvoice } = useAddInvoice(onSuccess);
  const { mutate: updateInvoice } = useUpdateInvoice(onSuccess);

  const validateForm = () => {
    subject.length < 1 ? setSubjectFlag(true) : setSubjectFlag(false);
    amount == "" ? setAmountFlag(true) : setAmountFlag(false);
    dueDate == null ? setDateFlag(true) : setDateFlag(false);
  };

  const handleAddInvoice = (e) => {
    e.preventDefault();

    validateForm();

    if (!amountFlag && !dateFlag && !subjectFlag) {
      const  invoice= {
          clientEmail : clientEmail,
          subject: subject,
          amount: amount,
          dueDate: dueDate,
        }

      addInvoice(invoice);
    }
  };

  const handleEditInvoice = (e) => {
    e.preventDefault();

    validateForm();

    if (!amountFlag && !dateFlag && !subjectFlag) {
      const invoiceObj = {
        invoiceId: invoice._id,
        invoiceInfo: {
          subject: subject,
          amount: amount,
          dueDate: dueDate,
        },
      };

      updateInvoice(invoiceObj);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={closeInvoiceForm}>
        <DialogTitle sx={{ fontWeight: "700", fontSize: "1.5rem" }}>
          Add Invoice
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="text"
                autoComplete="Client Email"
                fullWidth
                color="primary"
                variant="filled"
                name="clientEmail"
                id="clientEmail"
                label="Client Email"
                value={clientEmail}
                disabled
              />
              {subjectFlag && (
                <FormHelperText error>
                  Please enter the invoice subject
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                autoComplete="subject"
                required
                fullWidth
                color="primary"
                variant="filled"
                name="subject"
                id="subject"
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {subjectFlag && (
                <FormHelperText error>
                  Please enter the invoice subject
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                required
                fullWidth
                color="primary"
                variant="filled"
                name="amount"
                id="amount"
                label="Invoice Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              {amountFlag && (
                <FormHelperText error>
                  Please enter the invoice amount
                </FormHelperText>
              )}
            </Grid>

            <Grid item xs={12}>
              <DatePicker
                required
                sx={{ width: "100%" }}
                color="primary"
                name="date"
                id="date"
                label="Due Date"
                value={dueDate}
                onChange={(newVal) =>
                  setDueDate(new Date(newVal).toDateString())
                }
              />
              {dateFlag && (
                <FormHelperText error>
                  Please enter the invoice due date
                </FormHelperText>
              )}
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" color="error" onClick={closeInvoiceForm}>
            cancel
          </Button>
          {invoice == null ? (
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ marginRight: "8px" }}
              onClick={(e) => handleAddInvoice(e)}
            >
              Add
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ marginRight: "8px" }}
              onClick={(e) => handleEditInvoice(e)}
            >
              Edit
            </Button>
          )}
        </DialogActions>
      </Dialog>

      <Snackbar
        open={invoiceAddedSuccessfuly}
        autoHideDuration={3000}
        onClose={handleAddInviceNotification}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity="success" elevation={20}>
          The invoice has been added successfully
        </Alert>
      </Snackbar>
    </>
  );
};
